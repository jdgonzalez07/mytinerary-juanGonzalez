import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../SignIn/signin.css";
import server from "../../utils/axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authAction";


const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await server.post("/auth/in", formData);
      console.log(res);
      dispatch(login(res.data));

      // Restablecer el formulario después de un cierto tiempo (por ejemplo, 3 segundos)
      setTimeout(() => {
        setFormData({
          email: "",
          password: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const handleSubmitGoogle = async (data) => {
    try {
      const res = await server.post("/auth/in", data);
      console.log(res);
      dispatch(login(res.data));
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
     
    }
  };

  return (
    <div className="container-signin">
      <div className="container-form">
        <h5>Login with</h5>

        {/* <GoogleOAuthProvider clientId="792749125776-7vhbahctnrn1acrcu2efqb8t8er1gfat.apps.googleusercontent.com"> */}
        <div className="btn-google">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              const infoUser = jwtDecode(credentialResponse.credential);
              console.log(infoUser);

              handleSubmitGoogle({
                name: infoUser.given_name,
                lastName: infoUser.family_name,
                email: infoUser.email,
                password: "Ab$1234",
                photo: infoUser.picture,
                country: infoUser.locale,
              });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        {/* </GoogleOAuthProvider> */}
        <div className="separator">
          <hr />
          <span>Or</span>
          <hr />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 div-label">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              /* ref={inputEmail} */
              name="email"
              type="email"
              /* value={data.email} */
              className="form-control"
              id="email"
              required
            />
          </div>
          <div className="mb-3 div-label">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              /* ref={inputPassword} */
              onChange={handleChange}
              value={formData.password}
              name="password"
              type="password"
              className="form-control"
              id="password"
              /* value={data.password} */
              required
            />
          </div>
          <div className="text-center">
            <button
              /* onClick={handleSubmit} */
              type="submit"
              className="btn btn-primary"
            >
              Enviar
            </button>

            <p className="mt-4 mb-0 leading-normal fs-6 text-md text-white">
              You do not have an account ?{" "}
              <Link className="font-bold text-slate-700" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

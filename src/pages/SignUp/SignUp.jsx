import { GoogleLogin } from "@react-oauth/google";
import "../SignUp/signup.css";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import { useState } from "react";
import server from "../../utils/axios";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/actions/authAction";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    photo: "",
    country: "",
  });

  const [paisSeleccionado, setPaisSeleccionado] = useState("");
  const dispatch = useDispatch();

  const handleChangeData = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();

    try {
      data.country = paisSeleccionado;

      const res = await server.post("/auth/up", data);

      console.log(res);
      dispatch(signUp(res.data));

      setTimeout(() => {
        setData({
          name: "",
          lastName: "",
          email: "",
          password: "",
          photo: "",
          country: "",
        });
        setPaisSeleccionado("");
      }, 3000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const handleSubmitGoogle = async (data) => {
    setData((prevState) => {
      return { ...prevState, country: paisSeleccionado };
    });

    const res = await server.post("/auth/up", data);
    console.log(res);
    dispatch(signUp(res.data));
  };

  const paises = [
    { nombre: "Venezuela", codigo: "VE" },
    { nombre: "Estados Unidos", codigo: "US" },
    { nombre: "Canadá", codigo: "CA" },
    { nombre: "México", codigo: "MX" },
    { nombre: "Argentina", codigo: "AR" },
    { nombre: "Brasil", codigo: "BR" },
    { nombre: "Colombia", codigo: "CO" },
    { nombre: "España", codigo: "ES" },
    { nombre: "Francia", codigo: "FR" },
    { nombre: "Alemania", codigo: "DE" },
    { nombre: "Italia", codigo: "IT" },
    { nombre: "Japón", codigo: "JP" },
    { nombre: "Australia", codigo: "AU" },
    { nombre: "Reino Unido", codigo: "GB" },
    { nombre: "India", codigo: "IN" },
    { nombre: "China", codigo: "CN" },
  ];

  const handleChangePais = (e) => {
    setPaisSeleccionado(e.target.value); // Actualiza el país seleccionado
  };

  return (
    <div className="container-singUp">
      <div className="container-form-signup">
        <h5>Register with</h5>

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
        <form onSubmit={handleSubmitData}>
          <div className="mb-3 mt-2 div-label">
            <label htmlFor="Name" className="form-label">
              Name:
            </label>
            <input
              onChange={handleChangeData}
              name="name"
              type="text"
              value={data.name}
              className="form-control"
              id="Name"
              required
            />
          </div>
          <div className="mb-3 div-label">
            <label htmlFor="lastName" className="form-label">
              LastName:
            </label>
            <input
              onChange={handleChangeData}
              name="lastName"
              type="text"
              value={data.lastName}
              className="form-control"
              id="lastName"
            />
          </div>
          <div className="mb-3 div-label">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              onChange={handleChangeData}
              name="email"
              type="email"
              value={data.email}
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
              onChange={handleChangeData}
              name="password"
              type="password"
              className="form-control"
              id="password"
              value={data.password}
              required
            />
          </div>
          <div className="mb-3 mt-2 div-label">
            <label htmlFor="photo" className="form-label">
              Photo:
            </label>
            <input
              onChange={handleChangeData}
              name="photo"
              id="photo"
              value={data.photo}
              type="file"
              accept="image/*"
            />
          </div>
          <div className="select form-group">
            <label>
              Select a country:
              <select
                className="form-control"
                value={paisSeleccionado}
                onChange={handleChangePais}
              >
                <option value="">-- Select your country --</option>
                {paises.map((pais) => (
                  <option key={pais.nombre} value={pais.nombre}>
                    {pais.nombre}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary mt-2">
              Enviar
            </button>

            <p className="mt-4 mb-0 leading-normal fs-6 text-md text-white">
              Already have an account?{" "}
              <Link className="font-bold text-slate-700" to="/signin">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

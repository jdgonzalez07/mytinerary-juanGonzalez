import { Link as Anchor } from "react-router-dom";
import "../Navbar/navbarmain.css";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/actions/authAction.js";
import { Fragment } from "react";
import { toast } from "react-toastify";
import { BsPerson } from "react-icons/bs";

const NavbarMain = () => {
  const links = [
    { value: "/", id: "1", content: "Home", roles: ["default", "logged"] },
    {
      value: "/cities",
      id: "2",
      content: "cities",
      roles: ["default", "logged"],
    },
    { value: "/signup", id: "3", content: "Sign Up", roles: ["default"] },
    { value: "/signin", id: "4", content: "Sign In", roles: ["default"] },
  ];

  const { user } = useSelector((store) => store.authReducer);
  console.log(user);
  const { status } = useSelector((store) => store.authReducer);
  console.log(status);

  const dispatch = useDispatch();
  const styles = {
    width: "45px",
    height: "45px",
    borderRadius: "100%",
  };
  function loginOut() {
    dispatch(signOut());
    toast.warning(`See you later`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <>
      <header>
        <nav>
          <div className="nav-left">
            <h3>My Tinerary</h3>
          </div>
          <div className="nav-right">
            <ul>
              {links.map((link, indice) => {
                if (status === "online" && link.roles.includes("logged")) {
                  return (
                    <Fragment key={indice}>
                      <li>
                        <Anchor to={link.value}>{link.content}</Anchor>
                      </li>
                    </Fragment>
                  );
                } else if (
                  status === "offline" &&
                  link.roles.includes("default")
                ) {
                  return (
                    <Fragment key={indice}>
                      <li>
                        <Anchor to={link.value}>{link.content}</Anchor>
                      </li>
                    </Fragment>
                  );
                }
              })}

              {/* <button className="user-icon">
              {user?.photo && (
                  <img
                    src={user.photo}
                    alt=""
                    style={styles}
                    onClick={loginOut}
                  />)}
              </button> */}

              {user && ( // Mostrar solo si el usuario está logeado
                <button className="user-icon">
                  {typeof user.photo === "undefined" ? ( // Verifica si user.photo es de tipo "undefined"
                    <BsPerson size={28} color="white" /> // Ícono de usuario si user.photo es undefined
                  ) : (
                    <img
                      src={user.photo}
                      alt=""
                      style={styles}
                      onClick={loginOut}
                    />
                  )}
                </button>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarMain;
{
  /* < BsPerson size={28} color="white" /> */
}

{
  /* {user?.photo && (
                  <img
                    src={user.photo}
                    alt=""
                    style={styles}
                    onClick={loginOut}
                  />
                )} */
}

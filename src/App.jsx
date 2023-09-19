import "./App.css";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutMain from "./pages/Layouts/LayoutMain";
import Cities from "./pages/Cities/Cities";
import Details from "./pages/Details/Details";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import server from "./utils/axios";
import { useDispatch } from "react-redux";
import { authenticate, login } from "./redux/actions/authAction.js";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/details/:_id",
        element: <Details />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate())
  });

  /* useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
      console.log(credentialResponse);
      const infoUser = jwtDecode(credentialResponse.credential);
      const userData = {
        email: infoUser.email,
        password: "Ab$1234",
      };
      const res = await server.post("auth/in", userData);
      console.log(res);
      dispatch(login(res.data));
    },
    onError: () => {
      console.log("login failed");
    },
  }); */

  return <RouterProvider router={router} />;
}

export default App;

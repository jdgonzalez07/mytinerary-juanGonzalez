import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import server from "../../utils/axios";
import { LS } from "../../utils/LS";
import { toast } from "react-toastify";

const login = createAction("login", (credentials) => {
  const reducerData = {
    user: credentials.userData,
    token: credentials.token,
    status: "online",
  };
  LS.set("token", credentials.token);

  toast.success(`¡Welcome ${reducerData.user.name}!`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  return {
    payload: reducerData,
  };
});

const signUp = createAction("signUp", (credentials) => {
  const reducerData = {
    user: credentials.userData,
    token: credentials.token,
    status: "online",
  };
  toast.success(`Welcome ¡${reducerData.user.name}!`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  return {
    payload: reducerData,
  };
});
const authenticate = createAsyncThunk("authenticate", async () => {
  const token = LS.getText("token");

  try {
    const { data } = await server.get("/auth/token", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const reducerData = {
      user: data.userData,
      status: "online",
    };
    console.log(reducerData);
    toast.success(`¡Welcome again ${data.userData.name}!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    return reducerData;
  } catch (error) {
    console.log(error);
  }

  
});


const signOut = createAction('signOut', ()=>{
  LS.clear('token')
  return {
    payload: null
  }
})



export { login, signUp, authenticate,signOut };

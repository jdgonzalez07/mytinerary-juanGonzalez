import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import server from "../../utils/axios.js";

// Síncrona
/* const getCities = createAction("getCities", (data) => {
  return {
    payload: "algo",
  };
});
 */

// Asíncrona (Para traer las ciudades por _id)
const getCity = createAsyncThunk("getCity", async ({ _id }) => {
  try {
    const res = await server.get("/cities/" + _id);
    return res.data.response;
  } catch (error) {
    console.log(error);
    return [];
  }
});

// Trae los itinerarios por ciudad
const getItinerary = createAsyncThunk("getItinerary", async ({ _id }) => {
  try {
    const res = await server.get("/itineraries/" + _id);
    return res.data.response;
  } catch (error) {
    console.log(error);
    return [];
  }
});

// Asíncrona (Me trae todas las ciudades)
const getCities = createAsyncThunk("getCities", async () => {
  try {
    const res = await server.get("/cities");
    return res.data.response;
  } catch (error) {
    console.log(error);
    return [];
  }
});

// Asíncrona (Devuleve las ciudades que vamos a filtrar)
const filterCities = createAction("filterCities", (search) => {
  return {
    payload: {
      inputSearch: search,
    },
  };
});

export { getCity, getCities, filterCities, getItinerary };

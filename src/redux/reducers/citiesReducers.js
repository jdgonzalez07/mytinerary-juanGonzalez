import { createReducer } from "@reduxjs/toolkit";
import {
  filterCities,
  getCities,
  getItinerary,
} from "../actions/citiesActions.js";
import { getCity } from "../actions/citiesActions.js";

const initialState = {
  cities: [],
  loading: false,
  city: {},
  filteredCities: [],
  itinerary: {},
};

const citiesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getCity.fulfilled, (stateActual, action) => {
      console.log("fulfilled");
      const newState = { ...stateActual, city: action.payload };
      return newState;
    })

    .addCase(getCities.fulfilled, (stateActual, action) => {
      console.log("fulfilled");
      const newState = {
        ...stateActual,
        cities: action.payload,
        filteredCities: action.payload,
      };
      return newState;
    })

    .addCase(getItinerary.fulfilled, (stateActual, action) => {
      const newState = { ...stateActual, itinerary: action.payload };
      return newState;
    })

    .addCase(filterCities, (stateActual, action) => {
      const filterSearch = stateActual.cities.filter(
        (city) =>
          city.name.toLowerCase().startsWith(action.payload.inputSearch) ||
          city.name.toUpperCase().startsWith(action.payload.inputSearch)
      );

      return {
        ...stateActual,
        filteredCities: filterSearch,
      };
    })
);

export default citiesReducer;

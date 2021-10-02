import {
  ADD_SEARCH_CITY,
  ADD_SEARCH_PARAM,
  REMOVE_SEARCH_DETAILS,
} from "./searchTypes";

export const addSearchCity = (city) => {
  return {
    type: ADD_SEARCH_CITY,
    payload: city,
  };
};

export const addSearchParam = (param) => {
  return {
    type: ADD_SEARCH_PARAM,
    payload: param,
  };
};

export const removeSearchDetails = () => {
  return {
    type: REMOVE_SEARCH_DETAILS,
  };
};

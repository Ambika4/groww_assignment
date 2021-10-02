import {
  ADD_SEARCH_CITY,
  ADD_SEARCH_PARAM,
  REMOVE_SEARCH_DETAILS,
} from "./searchTypes";

const intialState = {
  city: "MUMBAI",
  param: {},
};

const searchReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_CITY: {
      const newState = { ...state };
      newState.city = action.payload;
      return newState;
    }
    case ADD_SEARCH_PARAM: {
      const newState = { ...state };
      newState.param = action.payload;
      return newState;
    }
    case REMOVE_SEARCH_DETAILS: {
      return intialState;
    }
    default:
      return state;
  }
};

export default searchReducer;

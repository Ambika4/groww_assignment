import {
  ADD_MASTER_DATA,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from "./favouriteTypes";

const intialState = {
  data: [],
  fav: [],
};

const favouriteReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_MASTER_DATA: {
      const newState = { ...state };
      newState.data = action.payload;
    }
    case ADD_FAVOURITE: {
      const newState = { ...state };

      return newState;
    }
    case REMOVE_FAVOURITE: {
      const newState = { ...state };

      return newState;
    }

    default:
      return state;
  }
};

export default favouriteReducer;

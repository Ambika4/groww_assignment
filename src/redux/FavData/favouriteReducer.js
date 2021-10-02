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
      return newState;
    }
    case ADD_FAVOURITE: {
      //const newState = { ...state };
      return {
        ...state,
        fav: [action.payload, ...state.fav],
      };
      //return newState;
    }
    case REMOVE_FAVOURITE: {
      // const newState = { ...state };

      // return newState;
      return {
        ...state,
        fav: state.fav.filter(
          (x) => x.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default favouriteReducer;

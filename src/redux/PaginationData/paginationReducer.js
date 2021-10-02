import {
  NEXT_CLICK,
  PREVIOUS_CLICK,
  SET_PAGEINATION_LIMIT,
  RESET_CURRENT,
} from "./pagiantionTypes";

const intialState = {
  limit: 10,
  currentPage: 1,
};

const paginationReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_PAGEINATION_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    case PREVIOUS_CLICK:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case NEXT_CLICK:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case RESET_CURRENT:
      return {
        ...state,
        currentPage: 1,
      };
    default:
      return state;
  }
};

export default paginationReducer;

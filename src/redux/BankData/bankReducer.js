import {
  BANK_DATA,
  BANK_DATA_LOADING,
  BANK_DATA_ERROR,
} from "./bankTypes";

const intialState = {
  data: [],
  loading: true,
  error: "",
};

const bankReducer = (state = intialState, action) => {
  switch (action.type) {
    case BANK_DATA:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case BANK_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case BANK_DATA_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bankReducer;

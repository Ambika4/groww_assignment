import { combineReducers } from "redux";
import bankReducer from "./BankData/bankReducer";
import searchReducer from "./SearchData/searchReducer";


const rootReducer = combineReducers({
  data: bankReducer,
  search: searchReducer
});

export default rootReducer;

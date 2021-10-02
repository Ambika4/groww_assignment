import { combineReducers } from "redux";
import bankReducer from "./BankData/bankReducer";
import favouriteReducer from "./FavData/favouriteReducer";
import paginationReducer from "./PaginationData/paginationReducer";
import searchReducer from "./SearchData/searchReducer";

const rootReducer = combineReducers({
  data: bankReducer,
  search: searchReducer,
  bankData: favouriteReducer,
  pagination: paginationReducer,
});

export default rootReducer;

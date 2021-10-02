import {
  BANK_DATA,
  BANK_DATA_LOADING,
  BANK_DATA_ERROR,
} from "./bankTypes";

export const getBankDataLoading = () => {
  return {
    type: BANK_DATA_LOADING,
  };
};

export const getBankData = (categories) => {
  return {
    type: BANK_DATA,
    payload: categories,
  };
};

export const getBankDataError = (err) => {
  return {
    type: BANK_DATA_ERROR,
    payload: err,
  };
};

export const fetchBankData = (url) => {
  return (dispatch) => {
    dispatch(getBankDataLoading());
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getBankData(data));
      })
      .catch((err) => {
        dispatch(getBankDataError(err));
      });
  };
};

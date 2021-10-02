import {
  BANK_DATA,
  BANK_DATA_LOADING,
  BANK_DATA_ERROR,
} from "./bankTypes";
import {URL} from '../../config/config';
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

export const fetchBankData = (city) => {
  let storedData = localStorage.getItem("bankData") || [];
  let data = storedData.length
    ? JSON.parse(storedData).find((e) => e.city === city)
    : "";
  let url = `${URL}${city}`;
  if (data) {
    return (dispatch) => {
      dispatch(getBankData(data.data));
    };
  } else {
    return (dispatch) => {
      dispatch(getBankDataLoading());
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let bankData = {
            city,
            data,
          };
          let ar = storedData.length ? JSON.parse(storedData) : [];
          ar.push(bankData);
          localStorage.setItem("bankData", JSON.stringify(ar));
          dispatch(getBankData(data));
        })
        .catch((err) => {
          dispatch(getBankDataError(err));
        });
    };
  }
};

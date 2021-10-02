import {
  NEXT_CLICK,
  PREVIOUS_CLICK,
  SET_PAGEINATION_LIMIT,
  RESET_CURRENT,
} from "./pagiantionTypes";

export const setPaginationLimit = (val) => {
  return {
    type: SET_PAGEINATION_LIMIT,
    payload: val,
  };
};

export const previousClicked = () => {
  return {
    type: PREVIOUS_CLICK,
  };
};
export const resetCurrent = () => {
  return {
    type: RESET_CURRENT,
  };
};

export const nextClicked = () => {
  return {
    type: NEXT_CLICK,
  };
};

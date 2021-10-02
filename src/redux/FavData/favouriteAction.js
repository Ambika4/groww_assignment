import { ADD_MASTER_DATA, ADD_FAVOURITE, REMOVE_FAVOURITE } from "./favouriteTypes";

export const addMasterData = (data) => {
  return {
    type: ADD_MASTER_DATA,
    payload: data,
  };
};

export const addFavouriteData = (data) => {
  return {
    type: ADD_FAVOURITE,
    payload: data,
  };
};

export const removeFavouriteData = (id) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: id,
  };
};
//Added by Ambika
export const deleteFavorites = (id) => {
  return (dispatch) => {
    dispatch(removeFavouriteData(id));
  };
};

export const updateFavorites = (id) => {
  return (dispatch) => {
    console.log(id);
    dispatch(addFavouriteData(id));
  };
};
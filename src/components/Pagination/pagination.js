import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PAGINATION } from "../../config/config";
//import { addMasterData } from "../../redux/FavData/favouriteAction";
import {
  nextClicked,
  previousClicked,
  setPaginationLimit,
} from "../../redux/PaginationData/paginationAction";
import "./Pagination.css";

function Pagination() {
  const [pageLimitDrop, setPageLimitDrop] = useState(10);
  //const pageLimit = useSelector((state) => state.pagination.limit);
  const currentPage = useSelector((state) => state.pagination.currentPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPaginationLimit(pageLimitDrop));
  }, [pageLimitDrop]);

  const dropDownHandler = (e) => {
    setPageLimitDrop(e.target.value);
  };

  const nextBtnClicked = () => {
    dispatch(nextClicked());
  };
  const prevBtnClicked = () => {
    dispatch(previousClicked());
  };

  return (
    <div className="pagination">
      <select onChange={dropDownHandler} className="pagination-select">
        {PAGINATION.map((el, index) => (
          <option value={el} key={index}>
            {el}
          </option>
        ))}
      </select>
      <button
        onClick={prevBtnClicked}
        className="pagination-button"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="paginationItem">{currentPage}</span>
      <button onClick={nextBtnClicked} className="pagination-button">
        Next
      </button>
    </div>
  );
}

export default Pagination;

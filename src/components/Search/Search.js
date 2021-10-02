import React, { useEffect, useState, useRef } from "react";
import "./Search.css";
import { CITIES, CATEGORY } from "../../config/config";
import { useDispatch, useSelector } from "react-redux";
import {
  addSearchCity,
  addSearchParam,
} from "../../redux/SearchData/searchAction";
import { resetCurrent } from "../../redux/PaginationData/paginationAction";

export default function Search() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [category, setCat] = useState("");
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.search);

  const timer = useRef(null);

  useEffect(() => {
    setCity(selectedData.city);
    let key = Object.keys(selectedData.param)[0];
    setCat(key);
    if (selectedData.param[key]) {
      setSearch(selectedData.param[key]);
    }
  }, []);

  const searchText = (obj) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      dispatch(addSearchParam(obj));
    }, 600);
  };

  useEffect(() => {
    if (category) {
      let obj = {
        [category]: search,
      };
      searchText(obj);
      if (search) dispatch(resetCurrent());
    }
  }, [search, category]);

  useEffect(() => {
    dispatch(addSearchCity(city));
    dispatch(resetCurrent());
  }, [city]);

  return (
    <div className="search-bar-comp">
      <select
        className="dropdown"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      >
        <option value="" disabled>
          Select City
        </option>
        {CITIES && CITIES.map((city, idx) => <option key={idx}>{city}</option>)}
      </select>
      <select
        className="dropdown"
        onChange={(e) => {
          setCat(e.target.value);
          setSearch("");
        }}
        value={category}
      >
        <option value="" disabled>
          Select Category
        </option>
        {CATEGORY &&
          CATEGORY.map((cat, idx) => <option key={idx}>{cat}</option>)}
      </select>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input-search"
        placeholder="Search"
      />
    </div>
  );
}

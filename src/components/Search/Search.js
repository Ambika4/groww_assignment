import React, { useEffect, useState } from "react";
import "./Search.css";
import { CITIES, CATEGORY } from "../../config/config";
import { useDispatch, useSelector } from "react-redux";
import {
  addSearchCity,
  addSearchParam,
} from "../../redux/SearchData/searchAction";

export default function Search() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [category, setCat] = useState("");
  const dispatch = useDispatch();
  // const selectedData = useSelector((state) => state.search);
  const selectedCity=useSelector((state)=>state.search.city);
  const selectedParam=useSelector((state)=>state.search.param);

  useEffect(() => {
    setCity(selectedCity);
    let key = Object.keys(selectedParam)[0];
    setCat(key);
    if (selectedParam[key]) {
      setSearch(selectedParam[key]);
    }
  }, []);

  useEffect(() => {
    if (category) {
      let obj = {
        [category]: search,
      };
      dispatch(addSearchParam(obj));
    }
  }, [search, category]);

  useEffect(() => {
    dispatch(addSearchCity(city));
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
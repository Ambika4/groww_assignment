import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/pagination";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchBankData } from "../../redux/BankData/bankAction";
import TableSkeleton from "../../components/TableSkeleton/TableSkeleton";
import { addMasterData } from "../../redux/FavData/favouriteAction";
// import useFetch from "../../utilites/useFetch";

export default function Home() {
  const dispatch = useDispatch();
  const [bankData, setBankData] = useState([]);
  const { data, loading = true, error } = useSelector((state) => state.data);
  const selectedCity = useSelector((state) => state.search.city);
  const searchParam = useSelector((state) => state.search.param);

  const url = `https://vast-shore-74260.herokuapp.com/banks?city=${selectedCity}`;

  // const { data, loading = true, error } = useFetch(url);

  useEffect(() => {
    dispatch(fetchBankData(url));
  }, [url]);

  useEffect(() => {
    let key = Object.keys(searchParam)[0];
    let value = Object.values(searchParam)[0];
    if (key && value && data) {
      let para = key.toLowerCase();
      let newData = data.filter((el) => el[para].toLowerCase().includes(value.toLowerCase()))
      setBankData(newData);
      dispatch(addMasterData(newData))
    } else {
      setBankData(data.slice(0,10));
      dispatch(addMasterData(data))
    }
  }, [data, searchParam]);



  return (
    <div className="home">
      <div className="home-section">
        <div className="header">
          <span className="title">All Banks</span>
          <div className="search-bar">
            <Search />
          </div>
        </div>
        {loading && !bankData.length ? (
          <TableSkeleton />
        ) : error ? (
          <h1>Error</h1>
        ) : (
          // <Pagination
          //   data={bankData}
          //   RenderComponent={Table}
          //   title="Bank data"
          //   pageLimit={5}
          //   dataLimit={10}
          // />
          <Table data={bankData} />
        )}
      </div>
    </div>
  );
}

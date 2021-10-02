import React, { useEffect} from "react";
import Search from "../../components/Search/Search";
import Table from "../../components/Table/Table";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchBankData } from "../../redux/BankData/bankAction";
import TableSkeleton from "../../components/TableSkeleton/TableSkeleton";
import { addMasterData } from "../../redux/FavData/favouriteAction";
import Pagination from "../../components/Pagination/Pagination";
// import useFetch from "../../utilites/useFetch";

export default function Home() {
  const dispatch = useDispatch();
  //const [bankData, setBankData] = useState([]);
  const { data, loading = true, error } = useSelector((state) => state.data);
  const selectedCity = useSelector((state) => state.search.city) || "MUMBAI";
  // const searchParam = useSelector((state) => state.search.param);

  // const url = `https://vast-shore-74260.herokuapp.com/banks?city=${selectedCity}`;

  // const { data, loading = true, error } = useFetch(url);

  useEffect(() => {
    dispatch(addMasterData(data));
  }, [data]);

  useEffect(() => {
    dispatch(fetchBankData(selectedCity));
  }, [selectedCity]);

  return (
    <div className="home">
      <div className="home-section">
        <div className="header">
          <span className="title">All Banks</span>
          <div className="search-bar">
            <Search />
          </div>
        </div>
        {loading ? (
          <TableSkeleton />
        ) : error ? (
          <h1>Error</h1>
        ) : (
          <>
            <Table />
            <Pagination />
          </>
        )}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./Table.css";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addMasterData } from "../../redux/FavData/favouriteAction";

export default function Table({ isFav }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);

  const data = useSelector((state) => state.bankData.data);
  const masterData = useSelector((state) => state.data.data);
  const pageLimit = useSelector((state) => state.pagination.limit);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const searchParam = useSelector((state) => state.search.param);

  useEffect(() => {
    const startIndex = currentPage * +pageLimit - pageLimit;
    const endIndex = startIndex + +pageLimit;
    let newData = data.length ? data.slice(startIndex, endIndex) : [];

    setTableData(newData.sort((a, b) => a.ifsc.localeCompare(b.ifsc)));
  }, [data, currentPage, pageLimit]);

  useEffect(() => {
    let key = Object.keys(searchParam)[0];
    let value = Object.values(searchParam)[0];
    if (key && value && masterData) {
      let para = key.toLowerCase();
      let newData = masterData.filter((el) =>
        el[para].toLowerCase().includes(value.toLowerCase())
      );
      dispatch(addMasterData(newData));
    }
  }, [searchParam]);

  const onClickHandler = (el) => {
    history.push({
      pathname: `/bank-details/${el.ifsc}`,
      state: { bankDetails: el },
    });
  };

  const checkClickHandler = (el) => {
    let favBankDataStored = localStorage.getItem("favBankData");
    let favData = [];
    if (favBankDataStored) {
      favData = JSON.parse(favBankDataStored);
    }
    favData.push(el);

    localStorage.setItem("favBankData", JSON.stringify(favData));
  };

  const favTickCheck = (ifsc) => {
    let favBankDataStored = localStorage.getItem("favBankData");
    return favBankDataStored
      ? JSON.parse(favBankDataStored).find((e) => e.ifsc === ifsc)
      : false;
  };

  const checkRemoveHandler = (ifsc) => {
    let favBankDataStored = localStorage.getItem("favBankData");
    let favData = JSON.parse(favBankDataStored).filter((e) => e.ifsc !== ifsc);

    localStorage.setItem("favBankData", JSON.stringify(favData));
  };

  return (
    <div>
      <div className="table-comp">
        <table>
          <thead>
            <tr>
              <th>Bank</th>
              <th>IFSC</th>
              <th>Branch</th>
              {isFav ? <th>Remove Fav</th> : <th>Add Fav</th>}
            </tr>
          </thead>
          <tbody>
            {tableData && tableData.length ? (
              tableData.map((el) => (
                <tr key={el.ifsc}>
                  <td
                    onClick={() => onClickHandler(el)}
                    className="bank-details"
                  >
                    {el.bank_name}
                  </td>
                  <td>{el.ifsc}</td>
                  <td>{el.branch}</td>
                  <td>
                    {favTickCheck(el.ifsc) ? (
                      <>
                        <input
                          type="checkbox"
                          onClick={() => checkRemoveHandler(el.ifsc)}
                          defaultChecked={true}
                        />
                      </>
                    ) : (
                      <input
                        type="checkbox"
                        onClick={() => checkClickHandler(el)}
                        defaultChecked={false}
                      />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Result Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

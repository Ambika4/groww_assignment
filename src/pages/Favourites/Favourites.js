import React, { useState, useEffect } from "react";
//import Table from "../../components/Table/Table";
import "./Favourites.css";
import { useHistory } from "react-router";

export default function Favourites() {
  const data = localStorage.getItem("favBankData");
  const [tableData, setTableData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setTableData(
      data
        ? JSON.parse(data).sort((a, b) => a.ifsc.localeCompare(b.ifsc))
        : []
    );
  }, []);

  const checkRemoveHandler = (ifsc) => {
    let favData = JSON.parse(data).filter((e) => e.ifsc !== ifsc);
    localStorage.setItem("favBankData", JSON.stringify(favData));
    setTableData(favData);
  };

  const onClickHandler = (el) => {
    history.push({
      pathname: `/bank-details/${el.ifsc}`,
      state: { bankDetails: el },
    });
  };
  return (
    <div className="favourites">
      <span className="title">Favourites</span>
      <div className="table-comp">
        <table>
          <thead>
            <tr>
              <th>Bank</th>
              <th>IFSC</th>
              <th>Branch</th>
              <th>Remove Fav</th>
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
                    <input
                      type="checkbox"
                      onClick={() => checkRemoveHandler(el.ifsc)}
                      defaultChecked={true}
                    />
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

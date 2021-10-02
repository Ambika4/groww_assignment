import React from "react";
import "./Table.css";
import { useHistory } from "react-router";

export default function Table({ data, isFav }) {
  const history = useHistory();

  const onClickHandler = (el) => {
    console.log(el);
    history.push({
      pathname: `/bank-details/${el.ifsc}`,
      state: { bankDetails: el },
    });
  };

  return (
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
          {data && data.length ? (
            data.map((el) => (
              <tr key={el.ifsc}>
                <td onClick={() => onClickHandler(el)} className="bank-details">
                  {el.bank_name}
                </td>
                <td>{el.ifsc}</td>
                <td>{el.branch}</td>
                <td>
                  <input type="checkbox" />
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
  );
}

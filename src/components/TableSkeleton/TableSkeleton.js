import React from "react";
import "./TableSkeleton.css";

export default function TableSkeleton() {
  const data = new Array(8).fill(true);
  return (
    <div className="table-comp-ske">
      <table>
        <thead>
          <tr>
            <th>Bank</th>
            <th>IFSC</th>
            <th>Branch</th>
            <th>Add Fav</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length ? (
            data.map((el, index) => (
              <tr key={index}>
                <td className="skeleton skeleton-text"></td>
                <td className="skeleton skeleton-text"></td>
                <td className="skeleton skeleton-text"></td>
                <td className="skeleton skeleton-text"></td>
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

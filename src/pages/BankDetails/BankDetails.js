import React from "react";
import { useHistory } from "react-router";
import "./BankDetails.css";

export default function BankDetails() {
  const history = useHistory();
  const bankDetails = history.location.state.bankDetails;

  return (
    <div className="bank-detail-table">
      { bankDetails ? (
        <table>
          <tbody>
            <tr>
              <td>
                <label className="bank-detail-table-label">Bank Name:</label>
              </td>
              <td>
                <span className="bank-detail-table-name ">
                  {bankDetails?.bank_name}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <label className="bank-detail-table-label">Branch :</label>
              </td>
              <td>
                <span className="bank-detail-table-span">
                  {bankDetails?.branch}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <label className="bank-detail-table-label">IFSC Code:</label>
              </td>
              <td>
                <span className="bank-detail-table-span">
                  {bankDetails?.ifsc}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <label className="bank-detail-table-label">City:</label>
              </td>
              <td>
                <span className="bank-detail-table-span">
                  {bankDetails?.city}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <label className="bank-detail-table-label">District:</label>
              </td>
              <td>
                <span className="bank-detail-table-span">
                  {bankDetails?.district}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <label className="bank-detail-table-label">State:</label>
              </td>
              <td>
                <span className="bank-detail-table-span">
                  {bankDetails?.state}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <label className="bank-detail-table-label">Address:</label>
              </td>
              <td>
                <span className="bank-detail-table-span">
                  {bankDetails?.address}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="no-bank-selected">
          <h2>No Details Found</h2>
        </div>
      )}
    </div>
  );
}
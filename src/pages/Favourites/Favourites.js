import React from "react";
import Table from "../../components/Table/Table";
import "./Favourites.css";

export default function Favourites() {
  return (
    <div className="favourites">
      <span className="title">Favourites</span>
      <Table isFav={true} />
    </div>
  );
}

import React from "react";
import ListProducts from "../listProducts/ListProducts";
import Search from "../search/Search";
import { useParams } from "react-router-dom";

function Container() {
  const { id } = useParams();

  return (
    <>
      <Search />
      <ListProducts id={id} />
    </>
  );
}

export default Container;

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CardProduct from "../cardProducts/cardProducts";
import axios from "axios";
function ListProducts() {
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const URL = "http://localhost:8080/api/products";

  useEffect(() => {
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => console.log(response));
  }, [1]);

  return (
    <>
      <div className="text-end mt-4">
        <form method="get">
          <input
            type="text"
            name="busqueda"
            id="busqueda"
            placeholder="Buscar..."
            className="rounded p-1"
          />
          <input type="submit" value="Buscar" className="mx-3 rounded" />
        </form>
      </div>
      <Container className="d-flex justify-content-evenly mt-4 flex-wrap">
        {data.map((el) => (
          <CardProduct key={el.id} products={el} />
        ))}
      </Container>
    </>
  );
}

export default ListProducts;

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CardProduct from "../cartProducts/cartProducts";
function ListProducts({ id }) {
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/products", {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Error:", err));
  }, []);

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

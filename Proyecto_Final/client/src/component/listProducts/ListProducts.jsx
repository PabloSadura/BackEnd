import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CardProduct from "../cartProducts/cartProducts";
function ListProducts() {
  const [data, setData] = useState([]);

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
    <Container className="d-flex justify-content-evenly mt-4 flex-wrap">
      {data.map((el) => (
        <CardProduct key={el.id} products={el} />
      ))}
    </Container>
  );
}

export default ListProducts;

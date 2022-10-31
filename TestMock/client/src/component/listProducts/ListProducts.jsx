import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import CardProduct from "../cardProducts/cardProducts";
import axios from "axios";
function ListProducts() {
  const [data, setData] = useState([]);

  const URL = "http://localhost:8080/products";

  useEffect(() => {
    axios.get(URL).then((response) => {
      const { data } = response;
      if (data.products) {
        setData(data.products);
      } else {
        setData(data.response);
      }
    });
  }, []);

  return !data ? (
    <Spinner animation="border" role="status" />
  ) : (
    <>
      <Container className="d-flex justify-content-evenly mt-4 flex-wrap">
        {data.length ? (
          data.map((el, i) => <CardProduct key={i} products={el} />)
        ) : (
          <h3>{data.response}</h3>
        )}
      </Container>
    </>
  );
}

export default ListProducts;

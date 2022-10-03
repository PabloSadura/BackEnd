import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddProducts() {
  const [product, setProduct] = useState({});

  const dataForm = (e) => {
    e.preventDefault();
    setProduct({
      nombre: e.target.nombre.value,
      descripcion: e.target.descripcion.value,
      codigo: e.target.codigo.value,
      foto: e.target.foto.value,
      precio: e.target.precio.value,
      stock: e.target.stock.value,
    });
    console.log(product);
  };

  if (product) {
    useEffect(() => {
      fetch("http://localhost:8080/api/products", {
        method: "post",
        body: JSON.stringify(product),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => {
          response.json();
        })
        .then((data) => console.log(data));
    }, []);
  }
  return (
    <Form className="container mt-4" method="post" onSubmit={dataForm}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre del producto</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          placeholder="Descripción"
          name="descripcion"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="codigo">
        <Form.Label>Código</Form.Label>
        <Form.Control type="text" placeholder="Código" name="codigo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="foto">
        <Form.Label>Foto</Form.Label>
        <Form.Control type="file" placeholder="Foto" name="foto" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="precio">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" placeholder="Precio" name="precio" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="stock">
        <Form.Label>Stock</Form.Label>
        <Form.Control type="number" placeholder="Stock" name="stock" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Cagar
      </Button>
    </Form>
  );
}

export default AddProducts;

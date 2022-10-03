import Card from "react-bootstrap/Card";

function CardProduct({ products }) {
  const { nombre, precio, codigo, stock, descripcion } = products;
  return (
    <Card style={{ width: "18rem" }} className="mt-4">
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Text>$ {precio}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Card.Link href="">Comprar</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;

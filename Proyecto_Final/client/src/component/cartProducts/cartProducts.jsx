import Card from "react-bootstrap/Card";

function CardProduct({ products }) {
  const { id, name, price, code, stock, description } = products;
  return (
    <Card style={{ width: "18rem" }} className="mt-4">
      <Card.Body>
        <Card.Title>
          #{id} {name}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>$ {price}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Card.Link href="">Comprar</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;

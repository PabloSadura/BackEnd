import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function CardProduct({ products }) {
  const { name, price, stock, img } = products;
  return (
    <Card style={{ width: "15rem", padding: "6px" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">$ {price}</Card.Subtitle>
        <Card.Text>Stock: {stock}</Card.Text>
        <div className="text-center">
          <Button variant="success">Comprar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;

import { Card, Button } from "react-bootstrap";

const Products = ({ product }) => {
  return (
    <Card className="my-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <i className="fas fa-star" style={{ color: "gold" }}></i>
          {product.rating} de {product.numReviews} Avaliações
        </Card.Text>
        <Card.Text>
          <h4>Preço: R$ {product.price}</h4>
          Estoque: {product.countInStock}
        </Card.Text>
        <a href={`/product/${product._id}`}>
          <Button variant="primary">Detalhes</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default Products;

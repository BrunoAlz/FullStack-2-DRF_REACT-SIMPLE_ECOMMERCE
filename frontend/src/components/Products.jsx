import { Card, Button } from "react-bootstrap";

// COMPONENTS
import Ratings from "./Ratings";

const Products = ({ product }) => {
  return (
    <Card className="my-3" style={{ width: "18rem" }}>
      <a href={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </a>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>

        <Ratings
          value={product.rating}
          text={`${product.numReviews} Avaliações`}
          color={"#F6BE00"}
        />

        <Card.Text>
          <Card.Title>R$ {product.price}</Card.Title>
          Estoque: {product.countInStock}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;

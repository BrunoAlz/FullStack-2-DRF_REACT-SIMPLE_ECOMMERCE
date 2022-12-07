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
        <Card.Text>
          <Ratings
            value={product.rating}
            text={`${product.numReviews} Avaliações`}
            color={"#F6BE00"}
          />
        </Card.Text>
        <Card.Text>
          <h4>R$ {product.price}</h4>
          Estoque: {product.countInStock}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;

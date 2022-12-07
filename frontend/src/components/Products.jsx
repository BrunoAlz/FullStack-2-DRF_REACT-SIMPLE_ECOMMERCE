import { Card, Button } from "react-bootstrap";

// COMPONENTS
import Ratings from "./Ratings";

// ROUTER
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <Card className="my-3" style={{ width: "18rem" }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
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

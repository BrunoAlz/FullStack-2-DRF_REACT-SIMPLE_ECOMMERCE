// ROUTER
import { Link } from "react-router-dom";

// BOOSTRAP
import {
  Row,
  Col,
  Image,
  ListGtoup,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";

// COMPONENTS
import Ratings from "../components/Ratings";

// DATA
import mockProductsData from "../data/mockProductsData";
import { useParams } from "react-router-dom";

const ProductsPage = ({ match }) => {
  const params = useParams();
  const product = mockProductsData.find((p) => p._id === params.id);

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Voltar
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <p>{product.name}</p>
            </ListGroup.Item>

            <ListGroup.Item>
              <Ratings
                value={product.rating}
                text={`${product.numReviews} Avaliações`}
                color={"#F6BE00"}
              />
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>R$ {product.price}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>R$ {product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                  Valor: 
                  </Col>
                  <Col>
                  {product.price}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                  Estoque: 
                  </Col>
                  <Col>
                  {product.countInStock}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductsPage;

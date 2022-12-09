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

// ROUTER
import { useParams } from "react-router-dom";

// HOOKS
import { useState, useEffect } from "react";

// AXIOS
import axios from "axios";

const ProductsPage = ({ match }) => {
  const params = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(`/api/products/${params.id}`).then();
      setProduct(data);
    }

    fetchProducts();
  }, [params]);

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
                  <Col>Valor:</Col>
                  <Col>{product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Estoque:</Col>
                  <Col>
                    {product.countInStock > 0 ? "Em Estoque" : "Sem Estoque"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="text-center">
                {product.countInStock > 0 ? (
                  <Button type="button">Adicionar ao Carrinho</Button>
                ) : (
                  <Button type="button" disabled>
                    Adicionar ao Carrinho
                  </Button>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductsPage;

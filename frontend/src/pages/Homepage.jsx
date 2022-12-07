// BOOSTRAP
import { Row, Col } from "react-bootstrap";

// DATA
import mockProductsData from "../data/mockProductsData";

const Homepage = () => {
  return (
    <div>
      <h1>Produtos Recentes</h1>
      <Row>
        {mockProductsData.map((product) => (
          <Col sm={12} md={6} lg={4} >
            <h3>
              {product.name}
            </h3>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Homepage;

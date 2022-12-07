// BOOSTRAP
import { Row, Col } from "react-bootstrap";

// DATA
import mockProductsData from "../data/mockProductsData";

// COMPONENTS
import Products from "../components/Products";

const Homepage = () => {
  return (
    <div>
      <h1>Produtos Recentes</h1>
      <Row>
        {mockProductsData.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Homepage;

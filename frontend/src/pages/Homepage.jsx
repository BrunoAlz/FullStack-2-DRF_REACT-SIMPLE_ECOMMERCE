// BOOSTRAP
import { Row, Col } from "react-bootstrap";

// COMPONENTS
import Products from "../components/Products";

// HOOKS
import { useState, useEffect } from "react";

// AXIOS
import axios from "axios";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products/").then();
      setProducts(data.products);
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Produtos Recentes</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Homepage;

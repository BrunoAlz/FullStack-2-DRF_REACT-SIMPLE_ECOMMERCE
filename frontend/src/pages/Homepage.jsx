// BOOSTRAP
import { Row, Col } from "react-bootstrap";

// DATA
import mockProductsData from "../data/mockProductsData";

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
      const { data } = await axios
        .get("http://127.0.0.1:8000/api/products/")
        .then();
      setProducts(data.products);
      console.log(data);
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

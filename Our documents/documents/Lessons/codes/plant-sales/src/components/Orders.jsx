import React, { useState, useEffect } from "react";
import { Card, Typography, Button, Row, Col } from "antd";

const MyOrders = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Rose Plant", price: 10, description: "Beautiful rose plant" },
    { id: 2, name: "Basil Plant", price: 5, description: "Fresh basil for cooking" },
    { id: 3, name: "Succulent", price: 8, description: "Low-maintenance succulent" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <Typography.Title level={3} type="secondary">
        Available Plants
      </Typography.Title>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8}>
            <Card title={product.name} bordered={false}>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <Button type="primary">Buy Now</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyOrders;

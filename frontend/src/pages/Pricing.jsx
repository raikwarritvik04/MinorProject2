import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaCheck, FaStar, FaTractor, FaWarehouse } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small farms getting started with precision agriculture",
      features: [
        "Basic crop recommendations",
        "Limited yield predictions (5/month)",
        "Community support",
        "Email notifications"
      ],
      popular: false,
      icon: <FaStar className="text-warning" />
    },
    {
      name: "Professional",
      price: "$19",
      period: "/month",
      description: "For serious farmers who want to maximize their yields",
      features: [
        "Advanced crop recommendations",
        "Unlimited yield predictions",
        "Priority support",
        "SMS alerts",
        "Historical data analysis",
        "Basic farm management"
      ],
      popular: true,
      icon: <FaTractor className="text-success" />
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "/month",
      description: "For large farms and agricultural businesses",
      features: [
        "All Professional features",
        "Multi-user access",
        "API integration",
        "Dedicated account manager",
        "Custom reporting",
        "Advanced analytics"
      ],
      popular: false,
      icon: <FaWarehouse className="text-primary" />
    }
  ];

  return (
    <section className="py-5 bg-white">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="fw-bold text-success mb-3">Simple, Transparent Pricing</h2>
          <p className="lead text-muted">Choose the plan that works best for your farm</p>
        </motion.div>

        <Row className="g-4 justify-content-center">
          {plans.map((plan, index) => (
            <Col key={index} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-100 border-0 shadow-sm overflow-hidden ${plan.popular ? 'border-success border-2' : ''}`}>
                  {plan.popular && (
                    <div className="bg-success text-white text-center py-2 small fw-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <Card.Body className="p-4">
                    <div className="text-center mb-4">
                      <div className="d-flex justify-content-center align-items-center mb-3">
                        {plan.icon}
                        <h3 className="ms-2 mb-0">{plan.name}</h3>
                      </div>
                      <h2 className="fw-bold">
                        {plan.price}
                        {plan.period && <small className="fs-6 text-muted fw-normal">{plan.period}</small>}
                      </h2>
                      <p className="text-muted">{plan.description}</p>
                    </div>
                    
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="mb-2">
                          <FaCheck className="text-success me-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="text-center mt-auto pt-3">
                      <Button 
                        variant={plan.popular ? "success" : "outline-success"} 
                        size="lg" 
                        className="w-100"
                      >
                        {plan.price === "Free" ? "Get Started" : "Choose Plan"}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-5"
        >
          <Card className="border-0 bg-light">
            <Card.Body className="p-4">
              <h4 className="mb-3">Need something custom?</h4>
              <p className="text-muted mb-4">
                We offer tailored solutions for agricultural cooperatives and large enterprises.
              </p>
              <Button variant="outline-success">Contact Sales</Button>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export default Pricing;
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLeaf, FaChartLine, FaUserShield, FaMobileAlt, FaDatabase, FaSeedling } from 'react-icons/fa';
import { GiFarmer, GiPlantRoots, GiWheat } from 'react-icons/gi';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <GiPlantRoots size={36} />,
      title: "Smart Crop Recommendations",
      description: "Get AI-powered suggestions for the best crops to plant based on soil composition, weather patterns, and historical data."
    },
    {
      icon: <FaChartLine size={36} />,
      title: "Accurate Yield Predictions",
      description: "Forecast your harvest yields with 95% accuracy to optimize resource allocation and financial planning."
    },
    {
      icon: <FaDatabase size={36} />,
      title: "Data-Driven Insights",
      description: "Access detailed analytics and historical trends to make informed farming decisions."
    },
    {
      icon: <FaUserShield size={36} />,
      title: "Farm Management Tools",
      description: "Track your farming activities, inputs, and outputs all in one place."
    },
    {
      icon: <FaMobileAlt size={36} />,
      title: "Mobile Friendly",
      description: "Access all features from your smartphone or tablet, even in the field."
    },
    {
      icon: <GiFarmer size={36} />,
      title: "Expert Support",
      description: "Get guidance from our team of agricultural specialists when you need it."
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="fw-bold text-success">
            <FaSeedling className="me-2" />
            Powerful Features
          </h2>
          <p className="lead text-muted">Everything you need to optimize your farming operations</p>
        </motion.div>

        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 border-0 shadow-sm hover-shadow transition-all">
                  <Card.Body className="p-4 text-center">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle p-3 mb-4 d-inline-flex">
                      {feature.icon}
                    </div>
                    <h4 className="mb-3">{feature.title}</h4>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
import React from 'react';
import { Container, Row, Col, Card, ListGroup, Image } from 'react-bootstrap';
import { FaLeaf, FaChartLine, FaUserShield, FaLightbulb, FaUsers, FaGlobeAmericas } from 'react-icons/fa';
import { GiFarmer, GiPlantRoots, GiWheat } from 'react-icons/gi';
import { motion } from 'framer-motion';
import teamImage from '../assets/team.jpg'; // Replace with your actual image path
import farmImage from '../assets/farm-tech.jpg'; // Replace with your actual image path

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      
      <Container className="flex-grow-1 py-5">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-5"
        >
          <h1 className="fw-bold text-success mb-4">
            <GiWheat className="me-3" />
            About CropSense
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
            Empowering farmers with AI-driven insights for sustainable and profitable agriculture
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-5"
        >
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-success bg-opacity-10 rounded-circle p-3 me-3">
                      <FaLightbulb className="text-success" size={24} />
                    </div>
                    <h3 className="mb-0">Our Mission</h3>
                  </div>
                  <p className="lead">
                    To revolutionize agriculture through artificial intelligence, making precision farming accessible to everyone.
                  </p>
                  <p>
                    CropSense was founded with a simple goal: to help farmers make better decisions using data. 
                    We combine cutting-edge machine learning with agricultural expertise to create tools that 
                    are both powerful and easy to use.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Image 
                src={farmImage} 
                alt="Farm with technology" 
                fluid 
                rounded 
                className="shadow-sm"
              />
            </Col>
          </Row>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-5"
        >
          <h2 className="text-center text-success mb-4">
            <FaLeaf className="me-2" />
            What We Offer
          </h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle p-3 mb-3" style={{ width: '60px' }}>
                    <GiPlantRoots className="text-success" size={24} />
                  </div>
                  <h4>Crop Recommendations</h4>
                  <p>
                    Get personalized crop suggestions based on your soil composition, weather patterns, and farming practices.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle p-3 mb-3" style={{ width: '60px' }}>
                    <FaChartLine className="text-success" size={24} />
                  </div>
                  <h4>Yield Prediction</h4>
                  <p>
                    Accurate forecasts to help you plan harvests, manage resources, and negotiate better prices.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle p-3 mb-3" style={{ width: '60px' }}>
                    <FaUserShield className="text-success" size={24} />
                  </div>
                  <h4>Data Security</h4>
                  <p>
                    Your farm data remains private and secure. We never sell or share your information.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-5"
        >
          <Row className="align-items-center g-4">
            <Col lg={6} className="order-lg-2">
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-success bg-opacity-10 rounded-circle p-3 me-3">
                      <FaUsers className="text-success" size={24} />
                    </div>
                    <h3 className="mb-0">Our Team</h3>
                  </div>
                  <p>
                    CropSense was founded by a team of agricultural scientists, data engineers, and AI researchers 
                    passionate about sustainable farming. With decades of combined experience, we're committed to 
                    building tools that make a real difference.
                  </p>
                  <ListGroup variant="flush" className="mt-3">
                    <ListGroup.Item className="border-0 ps-0">
                      <GiFarmer className="text-success me-2" />
                      <strong>Agricultural Experts</strong> with field experience
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0">
                      <FaChartLine className="text-success me-2" />
                      <strong>Data Scientists</strong> specializing in agri-tech
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 ps-0">
                      <FaGlobeAmericas className="text-success me-2" />
                      <strong>Global Perspective</strong> with local solutions
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image 
                src={teamImage} 
                alt="CropSense team" 
                fluid 
                rounded 
                className="shadow-sm"
              />
            </Col>
          </Row>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Card className="border-success bg-success bg-opacity-10">
            <Card.Body className="p-4">
              <h3 className="text-success text-center mb-4">Our Core Values</h3>
              <Row>
                <Col md={4} className="mb-4 mb-md-0">
                  <div className="text-center">
                    <div className="bg-white rounded-circle p-3 mb-3 d-inline-flex">
                      <GiFarmer className="text-success" size={24} />
                    </div>
                    <h5>Farmer First</h5>
                    <p className="mb-0">
                      We design for real farmers facing real challenges.
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-4 mb-md-0">
                  <div className="text-center">
                    <div className="bg-white rounded-circle p-3 mb-3 d-inline-flex">
                      <FaLightbulb className="text-success" size={24} />
                    </div>
                    <h5>Innovation</h5>
                    <p className="mb-0">
                      We push boundaries to deliver cutting-edge solutions.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center">
                    <div className="bg-white rounded-circle p-3 mb-3 d-inline-flex">
                      <FaLeaf className="text-success" size={24} />
                    </div>
                    <h5>Sustainability</h5>
                    <p className="mb-0">
                      We promote practices that protect our planet.
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>

      <footer className="bg-dark text-white py-3 mt-auto">
        <Container className="text-center">
          <small>© {new Date().getFullYear()} CropSense. All rights reserved.</small>
        </Container>
      </footer>
    </div>
  );
};

export default About;
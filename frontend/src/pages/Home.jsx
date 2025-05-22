import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Accordion, Badge } from 'react-bootstrap';
import { 
  GiPlantSeed, GiWheat, GiFarmer, GiChart, GiWaterDrop, GiPlantRoots, 
  GiFarmTractor, GiSandsOfTime, GiEarthAfricaEurope, GiPriceTag
} from 'react-icons/gi';
import { 
  FaLeaf, FaChartLine, FaSeedling, FaMobileAlt, FaGlobeAmericas, 
  FaShieldAlt, FaDatabase, FaHandshake 
} from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import farm_with_technology from '../assets/farm_with_technology.png';
import farmer_using_tablet from '../assets/farmer_using_tablet.png';
import data_visualization from '../assets/data_visualization.png';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
};

const Home = () => {
  return (
    <>
      {/* Top Navbar */}
      <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <span className="fw-bold text-gradient-primary fs-3">
              <FaSeedling className="me-2" />
              CropSense
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="gap-3 align-items-center">
              <Nav.Link as={Link} to="/features" className="fw-medium text-dark hover-primary">Features</Nav.Link>
              <Nav.Link as={Link} to="/pricing" className="fw-medium text-`````````````````````````````````````````````dark hover-primary">Pricing</Nav.Link>
              <Nav.Link as={Link} to="/resources" className="fw-medium text-dark hover-primary">Resources</Nav.Link>
              <Nav.Link as={Link} to="/about-us" className="fw-medium text-dark hover-primary">About</Nav.Link>
              <Nav.Link as={Link} to="/login" className="fw-medium text-dark hover-primary">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup" className="fw-medium">
                <Button variant="outline-success" className="px-3 py-2">Sign Up</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="pt-5" style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f5e9 100%)',
        paddingTop: '6rem'
      }}>
        <Container className="text-center pt-5">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="d-flex flex-column align-items-center"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <Badge bg="success" bgOpacity="10" text="success" className="px-3 py-2 fw-medium">
                <GiFarmTractor className="me-2" />
                <p style={{color:'white', text:'bold'}}>AI-Powered Agricultural Intelligence Platform</p>
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="display-4 fw-bold mb-4" style={{ lineHeight: 1.3 }}>
              <span className="text-gradient-primary">Revolutionizing</span> Agriculture With <br />Data-Driven <span className="text-gradient-primary">Precision Farming</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="lead text-muted mb-5" style={{ maxWidth: '700px' }}>
              CropSense works on machine learning concepts to deliver actionable insights that increase yields, reduce costs, and promote sustainable farming practices.
            </motion.p>
            
            <motion.div variants={fadeIn} className="d-flex justify-content-center gap-4 mt-2 flex-wrap">
              <Link to="/recommendation" style={{ textDecoration: 'none' }}>
                <Button variant="success" size="lg" className="d-flex align-items-center gap-2 px-4 py-3 shadow-sm">
                  Crop Recommendation
                </Button>
              </Link>
              <Link to="/yield-prediction" style={{ textDecoration: 'none' }}>
                <Button variant="outline-success" size="lg" className="d-flex align-items-center gap-2 px-4 py-3 border-2 fw-medium">
                  Yield Prediction
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={fadeIn} className="mt-5 position-relative">
              <img 
                src={farm_with_technology} 
                alt="Farm with technology integration" 
                className="img-fluid rounded-3 shadow" 
                style={{ maxHeight: '450px', objectFit: 'cover', border: '1px solid rgba(0,0,0,0.1)' }}
              />
              <div className="position-absolute bottom-0 start-0 bg-white p-3 rounded shadow-sm ms-3 mb-3" style={{ maxWidth: '300px' }}>
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-success bg-opacity-10 rounded-circle p-2">
                    <IoMdNotifications className="text-success" size={20} />
                  </div>
                  <div>
                    <h6 className="mb-0">Real-time Alerts</h6>
                    <small className="text-muted">Get notified about critical conditions</small>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Trusted By Section */}
      <section className="py-4 bg-white">
        <Container>
          <motion.div initial="hidden" whileInView="visible" variants={staggerContainer}>
            <Row className="align-items-center justify-content-center">
              <Col xs="auto" className="text-muted me-3 d-none d-md-block">
                Trusted by agricultural leaders:
              </Col>
              {['Syngenta', 'Bayer', 'John Deere', 'FAO', 'AGCO'].map((company, index) => (
                <Col xs={6} md="auto" key={index}>
                  <motion.div variants={fadeIn} className="p-3 text-center text-muted fw-medium">
                    {company}
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Value Proposition Section */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div initial="hidden" whileInView="visible" variants={staggerContainer}>
            <Row className="g-4">
              <Col lg={4}>
                <motion.div variants={fadeIn}>
                  <div className="p-4 h-100 bg-white rounded shadow-sm">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="bg-success bg-opacity-10 p-3 rounded-circle">
                        <GiPriceTag className="text-success" size={24} />
                      </div>
                      <h4 className="mb-0">Cost Reduction</h4>
                    </div>
                    <p className="text-muted">
                      Optimize input usage (water, fertilizers, pesticides) to reduce operational costs by up to 30% while maintaining or improving yields.
                    </p>
                    <ul className="text-muted">
                      <li>Precision resource allocation</li>
                      <li>Waste reduction strategies</li>
                      <li>Input cost analytics</li>
                    </ul>
                  </div>
                </motion.div>
              </Col>
              <Col lg={4}>
                <motion.div variants={fadeIn}>
                  <div className="p-4 h-100 bg-white rounded shadow-sm">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="bg-success bg-opacity-10 p-3 rounded-circle">
                        <GiWheat className="text-success" size={24} />
                      </div>
                      <h4 className="mb-0">Yield Optimization</h4>
                    </div>
                    <p className="text-muted">
                      Achieve 15-40% higher yields through data-driven planting decisions, optimized crop rotation, and timely interventions.
                    </p>
                    <ul className="text-muted">
                      <li>Hyper-local crop recommendations</li>
                      <li>Growth stage monitoring</li>
                      <li>Harvest timing optimization</li>
                    </ul>
                  </div>
                </motion.div>
              </Col>
              <Col lg={4}>
                <motion.div variants={fadeIn}>
                  <div className="p-4 h-100 bg-white rounded shadow-sm">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="bg-success bg-opacity-10 p-3 rounded-circle">
                        <FaGlobeAmericas className="text-success" size={24} />
                      </div>
                      <h4 className="mb-0">Sustainability</h4>
                    </div>
                    <p className="text-muted">
                      Reduce environmental impact while improving productivity through sustainable precision agriculture practices.
                    </p>
                    <ul className="text-muted">
                      <li>Water conservation analytics</li>
                      <li>Carbon footprint tracking</li>
                      <li>Soil health preservation</li>
                    </ul>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-white">
        <Container>
          <motion.div initial="hidden" whileInView="visible" variants={staggerContainer}>
            <Row className="g-4 justify-content-center text-center">
              <Col xs={6} md={3}>
                <motion.div variants={fadeIn} className="p-3">
                  <div className="display-4 fw-bold text-success mb-2">95%</div>
                  <div className="text-muted">Recommendation Accuracy</div>
                  <small className="text-success">Based on field trials</small>
                </motion.div>
              </Col>
              <Col xs={6} md={3}>
                <motion.div variants={fadeIn} className="p-3">
                  <div className="display-4 fw-bold text-success mb-2">10K+</div>
                  <div className="text-muted">Farmers Empowered</div>
                  <small className="text-success">Across 35+ countries</small>
                </motion.div>
              </Col>
              <Col xs={6} md={3}>
                <motion.div variants={fadeIn} className="p-3">
                  <div className="display-4 fw-bold text-success mb-2">30%</div>
                  <div className="text-muted">Average Yield Increase</div>
                  <small className="text-success">First year adoption</small>
                </motion.div>
              </Col>
              <Col xs={6} md={3}>
                <motion.div variants={fadeIn} className="p-3">
                  <div className="display-4 fw-bold text-success mb-2">15+</div>
                  <div className="text-muted">Crop Types Supported</div>
                  <small className="text-success">From wheat to specialty crops</small>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Platform Overview Section */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div initial="hidden" whileInView="visible" variants={staggerContainer}>
            <Row className="align-items-center">
              <Col lg={6} className="mb-5 mb-lg-0">
                <motion.div variants={fadeIn}>
                  <Badge bg="success" bgOpacity="10" text="success" className="px-3 py-2 fw-medium mb-3">
                    <p style={{color:'white', text:'bold'}}><br></br>PLATFORM OVERVIEW</p>
                  </Badge>
                  <h2 className="fw-bold mb-4">Comprehensive Farm Management Suite</h2>
                  <p className="lead text-muted mb-4">
                    CropSense integrates multiple data sources into a unified platform that provides actionable intelligence for your entire operation.
                  </p>
                  
                  <div className="d-flex gap-3 mb-4">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                      <FaDatabase size={20} />
                    </div>
                    <div>
                      <h5 className="fw-medium">Data Integration</h5>
                      <p className="text-muted mb-0">
                        Connect soil sensors, weather stations, equipment telemetry, and satellite imagery for complete farm visibility.
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex gap-3 mb-4">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                      <GiChart size={20} />
                    </div>
                    <div>
                      <h5 className="fw-medium">Advanced Analytics</h5>
                      <p className="text-muted mb-0">
                        Proprietary algorithms analyze historical and real-time data to predict outcomes and recommend actions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex gap-3">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                      <FaMobileAlt size={20} />
                    </div>
                    <div>
                      <h5 className="fw-medium">Mobile Accessibility</h5>
                      <p className="text-muted mb-0">
                        Access critical insights from anywhere with our iOS and Android apps designed for field use.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div variants={scaleUp}>
                  <div className="position-relative">
                    <img
                      src={data_visualization}
                      alt="CropSense data visualization dashboard"
                      className="img-fluid rounded-3 shadow-lg border"
                    />
                    <div className="position-absolute top-0 end-0 bg-white p-3 rounded shadow-sm me-3 mt-3" style={{ maxWidth: '250px' }}>
                      <div className="d-flex align-items-center gap-2">
                        <div className="bg-success bg-opacity-10 rounded-circle p-2">
                          <GiSandsOfTime className="text-success" size={18} />
                        </div>
                        <div>
                          <h6 className="mb-0">Historical Trends</h6>
                          <small className="text-muted">Compare season performance</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-white">
        <Container>
          <motion.div initial="hidden" whileInView="visible" variants={staggerContainer}>
            <Row className="text-center mb-5">
              <Col>
                <motion.div variants={fadeIn}>
                  <Badge bg="success" bgOpacity="10" text="success" className="px-3 py-2 fw-medium mb-3">
                  <p style={{color:'white', text:'bold'}}>CORE FEATURES</p>
                  </Badge>
                </motion.div>
                <motion.h2 variants={fadeIn} className="fw-bold mb-3">Precision Agriculture Solutions</motion.h2>
                <motion.p variants={fadeIn} className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                  Our platform combines agricultural expertise with cutting-edge technology to deliver comprehensive farm management tools.
                </motion.p>
              </Col>
            </Row>
            <Row className="g-4">
              {[
                {
                  icon: <GiPlantSeed size={48} className="text-primary" />,
                  title: "Smart Crop Recommendations",
                  desc: "AI-powered suggestions for optimal crops based on soil composition, weather patterns, historical yields, and market conditions.",
                  highlights: [
                    "Multi-variable analysis",
                    "Hybrid suitability scoring",
                    "Rotation planning"
                  ]
                },
                {
                  icon: <GiChart size={48} className="text-info" />,
                  title: "Yield Prediction Analytics",
                  desc: "Accurate harvest forecasts using machine learning models trained on thousands of farm datasets worldwide.",
                  highlights: [
                    "Field-level predictions",
                    "Scenario modeling",
                    "Risk assessment"
                  ]
                },
                {
                  icon: <GiWaterDrop size={48} className="text-blue" />,
                  title: "Irrigation Optimization",
                  desc: "Precision water management recommendations based on evapotranspiration rates and soil moisture monitoring.",
                  highlights: [
                    "Water savings up to 40%",
                    "Automated scheduling",
                    "Drought adaptation"
                  ]
                },
                {
                  icon: <FaLeaf size={48} className="text-success" />,
                  title: "Plant Health Monitoring",
                  desc: "Early detection of stress, nutrient deficiencies, and disease risks using spectral analysis and computer vision.",
                  highlights: [
                    "NDVI imaging",
                    "Pest risk alerts",
                    "Treatment recommendations"
                  ]
                },
                {
                  icon: <GiFarmer size={48} className="text-warning" />,
                  title: "Operation Management",
                  desc: "Complete farm operation tools including planting schedules, labor tracking, and equipment management.",
                  highlights: [
                    "Task automation",
                    "Resource allocation",
                    "Compliance tracking"
                  ]
                },
                {
                  icon: <GiPlantRoots size={48} className="text-brown" />,
                  title: "Soil Health Intelligence",
                  desc: "Comprehensive soil analytics including organic matter, nutrient levels, and microbial activity tracking.",
                  highlights: [
                    "Sampling guidance",
                    "Amendment planning",
                    "Erosion control"
                  ]
                }
              ].map((feature, index) => (
                <Col md={6} lg={4} key={index}>
                  <motion.div variants={scaleUp} whileHover={{ y: -5 }}>
                    <div className="p-4 shadow-sm rounded bg-white h-100 d-flex flex-column border-0">
                      <div className="mb-4">{feature.icon}</div>
                      <h4 className="mb-3">{feature.title}</h4>
                      <p className="text-muted mb-3 flex-grow-1">
                        {feature.desc}
                      </p>
                      <ul className="text-muted small ps-3 mb-3">
                        {feature.highlights.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <Link to="#" className="mt-auto text-decoration-none small fw-medium">
                        Learn more →
                      </Link>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div initial="hidden" whileInView="visible" variants={staggerContainer}>
            <Row className="align-items-center">
              <Col lg={6} className="order-lg-1 mb-5 mb-lg-0">
                <motion.div variants={scaleUp}>
                  <div className="position-relative">
                    <img
                      src={farmer_using_tablet}
                      alt="Farmer using CropSense tablet application"
                      className="img-fluid rounded-3 shadow-lg border"
                    />
                    <div className="position-absolute bottom-0 start-0 bg-white p-3 rounded shadow-sm ms-3 mb-3" style={{ maxWidth: '250px' }}>
                      <div className="d-flex align-items-center gap-2">
                        <div className="bg-success bg-opacity-10 rounded-circle p-2">
                          <GiEarthAfricaEurope className="text-success" size={18} />
                        </div>
                        <div>
                          <h6 className="mb-0">Global Adaptation</h6>
                          <small className="text-muted">Localized for all regions</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6} className="order-lg-0">
                <motion.div variants={fadeIn}>
                  <Badge bg="success" bgOpacity="10" text="success" className="px-3 py-2 fw-medium mb-3">
                  <p style={{color:'white', text:'bold'}}><br></br>IMPLEMENTATION PROCESS</p>
                  </Badge>
                  <h2 className="fw-bold mb-4">Seamless Integration Into Your Workflow</h2>
                  <p className="text-muted mb-5">
                    Our agricultural technologists ensure smooth onboarding and continuous support throughout your precision farming journey.
                  </p>
                  
                  <div className="d-flex gap-4 mb-4">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                      <span className="fw-bold fs-5">1</span>
                    </div>
                    <div>
                      <h5 className="fw-medium">Initial Consultation & Data Collection</h5>
                      <p className="text-muted mb-0">
                        Our team works with you to understand your operation and integrate existing data sources (soil tests, yield maps, equipment data).
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex gap-4 mb-4">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                      <span className="fw-bold fs-5">2</span>
                    </div>
                    <div>
                      <h5 className="fw-medium">System Configuration & Training</h5>
                      <p className="text-muted mb-0">
                        We customize the platform for your crops and region, then provide comprehensive training for your team.
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex gap-4">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                      <span className="fw-bold fs-5">3</span>
                    </div>
                    <div>
                      <h5 className="fw-medium">Ongoing Support & Optimization</h5>
                      <p className="text-muted mb-0">
                        Regular check-ins and system updates ensure you continue deriving maximum value as conditions change.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Data Security Section */}
      <section className="py-5 bg-white">
        <Container>
          <motion.div initial="hidden" whileInView="visible" variants={staggerContainer}>
            <Row className="align-items-center">
              <Col lg={6} className="mb-5 mb-lg-0">
                <motion.div variants={fadeIn}>
                  <Badge bg="success" bgOpacity="10" text="success" className="px-3 py-2 fw-medium mb-3">
                  <p style={{color:'white', text:'bold'}}><br></br>DATA SECURITY</p>
                  </Badge>
                  <h2 className="fw-bold mb-4">Enterprise-Grade Data Protection</h2>
                  <p className="text-muted mb-5">
                    Your farm data remains private and secure with our military-grade encryption and strict access controls.
                  </p>
                  
                  <div className="d-flex gap-3 mb-4">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                      <FaShieldAlt size={20} />
                    </div>
                    <div>
                      <h5 className="fw-medium">Bank-Level Encryption</h5>
                      <p className="text-muted mb-0">
                        All data transmissions and storage protected with AES-256 encryption, the same standard used by financial institutions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex gap-3 mb-4">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                      <FaDatabase size={20} />
                    </div>
                    <div>
                      <h5 className="fw-medium">Data Ownership Protection</h5>
                      <p className="text-muted mb-0">
                        You retain full ownership of your farm data. We never sell or share your information without explicit consent.
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex gap-3">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                      <FaHandshake size={20} />
                    </div>
                    <div>
                      <h5 className="fw-medium">Compliance Assurance</h5>
                      <p className="text-muted mb-0">
                        Fully compliant with GDPR, CCPA, and global agricultural data standards.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div variants={scaleUp}>
                  <div className="bg-success bg-opacity-10 p-5 rounded-3 h-100">
                    <h4 className="fw-bold mb-4">Our Security Commitments</h4>
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex gap-3">
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', flexShrink: 0 }}>
                          <FaShieldAlt className="text-success" size={14} />
                        </div>
                        <div>
                          <h6 className="fw-medium mb-1">SOC 2 Type II Certified</h6>
                          <p className="text-muted small mb-0">Regularly audited security controls and procedures</p>
                        </div>
                      </li>
                      <li className="mb-3 d-flex gap-3">
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', flexShrink: 0 }}>
                          <FaShieldAlt className="text-success" size={14} />
                        </div>
                        <div>
                          <h6 className="fw-medium mb-1">Private Cloud Infrastructure</h6>
                          <p className="text-muted small mb-0">Dedicated agricultural data servers with physical security</p>
                        </div>
                      </li>
                      <li className="mb-3 d-flex gap-3">
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', flexShrink: 0 }}>
                          <FaShieldAlt className="text-success" size={14} />
                        </div>
                        <div>
                          <h6 className="fw-medium mb-1">Role-Based Access Controls</h6>
                          <p className="text-muted small mb-0">Granular permissions for team members and advisors</p>
                        </div>
                      </li>
                      <li className="d-flex gap-3">
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', flexShrink: 0 }}>
                          <FaShieldAlt className="text-success" size={14} />
                        </div>
                        <div>
                          <h6 className="fw-medium mb-1">Regular Security Audits</h6>
                          <p className="text-muted small mb-0">Continuous vulnerability testing and penetration assessments</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div initial="hidden" whileInView="visible" variants={staggerContainer}>
            <Row className="text-center mb-5">
              <Col>
                <motion.div variants={fadeIn}>
                  <Badge bg="success" bgOpacity="10" text="success" className="px-3 py-2 fw-medium mb-3">
                  <p style={{color:'white', text:'bold'}}><br></br>CUSTOMER SUCCESS</p>
                  </Badge>
                </motion.div>
                <motion.h2 variants={fadeIn} className="fw-bold mb-3">Trusted by Progressive Farmers Worldwide</motion.h2>
                <motion.p variants={fadeIn} className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                  Hear from agricultural producers who have transformed their operations with CropSense precision farming solutions.
                </motion.p>
              </Col>
            </Row>
            <Row className="g-4">
              {[
                {
                  quote: "Implementing CropSense's recommendations increased our soybean yield by 28% while reducing fertilizer costs by 15%. The ROI was evident in the first season itself.",
                  name: "Raj Patel",
                  location: "Maharashtra, India",
                  farm: "1,200 acre diversified operation"
                },
                {
                  quote: "The yield prediction models helped us secure better financing terms and negotiate forward contracts with confidence. This platform pays for itself many times over.",
                  name: "Maria Gonzalez",
                  location: "Sonora, Mexico",
                  farm: "Commercial wheat and corn producer"
                },
                {
                  quote: "As a first-generation farmer, the guidance from CropSense gave me the confidence to make data-driven decisions that compete with established operations.",
                  name: "Thomas Omondi",
                  location: "Nakuru, Kenya",
                  farm: "75 acre horticulture farm"
                }
              ].map((testimonial, index) => (
                <Col md={4} key={index}>
                  <motion.div variants={scaleUp} whileHover={{ scale: 1.02 }}>
                    <div className="p-4 bg-white rounded shadow-sm h-100 d-flex flex-column">
                      <div className="mb-4">
                        <div className="text-warning mb-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <p className="lead fst-italic">"{testimonial.quote}"</p>
                      </div>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center gap-3">
                          <div className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                            <GiFarmer className="text-success" size={24} />
                          </div>
                          <div>
                            <h6 className="mb-0 fw-medium">{testimonial.name}</h6>
                            <small className="text-muted d-block">{testimonial.location}</small>
                            <small className="text-success">{testimonial.farm}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-white">
        <Container>
          <motion.div initial="hidden" whileInView="visible" variants={staggerContainer}>
            <Row className="text-center mb-5">
              <Col>
                <motion.div variants={fadeIn}>
                  <Badge bg="success" bgOpacity="10" text="success" className="px-3 py-2 fw-medium mb-3">
                  <p style={{color:'white', text:'bold'}}><br></br>FREQUENTLY ASKED QUESTIONS</p>
                  </Badge>
                </motion.div>
                <motion.h2 variants={fadeIn} className="fw-bold mb-3">Common Questions About CropSense</motion.h2>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={8}>
                <motion.div variants={fadeIn}>
                  <Accordion flush>
                    <Accordion.Item eventKey="0" className="mb-3 border rounded-3 overflow-hidden">
                      <Accordion.Header className="fw-medium">
                        What data do I need to provide to get started?
                      </Accordion.Header>
                      <Accordion.Body className="text-muted">
                        At minimum, we need your location, basic soil characteristics, and historical crop information. The more data you can provide (soil tests, yield maps, irrigation records), the more accurate our recommendations will be. Our team helps you identify and digitize existing records during onboarding.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="mb-3 border rounded-3 overflow-hidden">
                      <Accordion.Header className="fw-medium">
                        How does CropSense handle different farm sizes and types?
                      </Accordion.Header>
                      <Accordion.Body className="text-muted">
                        Our platform scales from smallholder farms to large commercial operations. The algorithms adapt to your specific context - whether you're growing specialty crops on 5 acres or managing thousands of acres of commodity crops. We offer different tiers of service tailored to operation size and complexity.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="mb-3 border rounded-3 overflow-hidden">
                      <Accordion.Header className="fw-medium">
                        What technology infrastructure do I need?
                      </Accordion.Header>
                      <Accordion.Body className="text-muted">
                        CropSense works with any internet-connected device. For optimal functionality, we recommend a smartphone or tablet for field use. No specialized equipment is required, though we can integrate with existing precision ag hardware (yield monitors, soil sensors, etc.) if available.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="mb-3 border rounded-3 overflow-hidden">
                      <Accordion.Header className="fw-medium">
                        How often are recommendations updated?
                      </Accordion.Header>
                      <Accordion.Body className="text-muted">
                        Our models continuously update as new data becomes available (weather changes, scouting reports, etc.). You'll receive alerts when significant updates occur. Major recommendations (like planting decisions) are reviewed at least weekly during critical periods.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="border rounded-3 overflow-hidden">
                      <Accordion.Header className="fw-medium">
                        What support is available after implementation?
                      </Accordion.Header>
                      <Accordion.Body className="text-muted">
                        All subscriptions include email and chat support with our agronomy team. Premium tiers offer dedicated account managers and seasonal on-site consultations.
                        </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div initial="hidden" whileInView="visible" variants={staggerContainer}>
            <Row className="text-center mb-5">
              <Col>
                <motion.div variants={fadeIn}>
                  <Badge bg="success" bgOpacity="10" text="success" className="px-3 py-2 fw-medium mb-3">
                  <p style={{color:'white', text:'bold'}}><br></br>FLEXIBLE PLANS</p>
                  </Badge>
                </motion.div>
                <motion.h2 variants={fadeIn} className="fw-bold mb-3">Simple, Transparent Pricing</motion.h2>
                <motion.p variants={fadeIn} className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                  Choose the plan that fits your operation size and needs. All plans include core features with no long-term contracts.
                </motion.p>
              </Col>
            </Row>
            <Row className="g-4 justify-content-center">
              {[
                {
                  name: "Starter",
                  price: "$99",
                  period: "per month",
                  description: "For small farms up to 50 acres",
                  features: [
                    "Basic crop recommendations",
                    "Yield predictions",
                    "Email support",
                    "Mobile access",
                    "Weather integration"
                  ],
                  buttonVariant: "outline-success"
                },
                {
                  name: "Professional",
                  price: "$299",
                  period: "per month",
                  description: "For mid-size operations up to 500 acres",
                  features: [
                    "Advanced analytics",
                    "Irrigation planning",
                    "Priority support",
                    "Equipment integration",
                    "Soil health tracking",
                    "Disease risk alerts"
                  ],
                  buttonVariant: "success",
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description: "For large operations and agribusinesses",
                  features: [
                    "Unlimited acreage",
                    "Dedicated account manager",
                    "API access",
                    "On-site training",
                    "Custom reporting",
                    "Multi-user access",
                    "Historical analysis"
                  ],
                  buttonVariant: "outline-dark"
                }
              ].map((plan, index) => (
                <Col md={6} lg={4} key={index}>
                  <motion.div variants={scaleUp} whileHover={{ y: -5 }}>
                    <div className={`p-4 h-100 d-flex flex-column ${plan.popular ? 'border-success border-2 rounded-3 bg-white shadow-sm' : 'bg-white rounded-3 shadow-sm'}`}>
                      {plan.popular && (
                        <div className="bg-success text-white text-center py-1 mb-3 rounded-pill small fw-medium">
                          MOST POPULAR
                        </div>
                      )}
                      <h3 className="fw-bold mb-1">{plan.name}</h3>
                      <div className="d-flex align-items-end mb-2">
                        <span className="display-5 fw-bold">{plan.price}</span>
                        <span className="text-muted ms-1">{plan.period}</span>
                      </div>
                      <p className="text-muted mb-4">{plan.description}</p>
                      <ul className="text-muted mb-4 ps-3 flex-grow-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="mb-2">{feature}</li>
                        ))}
                      </ul>
                      <Link to="/signup">
                        <Button variant={plan.buttonVariant} size="lg" className="w-100 py-2 fw-medium">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
            <Row className="mt-4 text-center">
              <Col>
                <motion.div variants={fadeIn}>
                  <p className="text-muted mb-0">
                    Need a customized solution? <Link to="/contact" className="text-success fw-medium">Contact our enterprise team</Link>
                  </p>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-success text-white">
        <Container>
          <motion.div initial="hidden" whileInView="visible" variants={staggerContainer}>
            <Row className="align-items-center text-center text-lg-start">
              <Col lg={8}>
                <motion.h2 variants={fadeIn} className="fw-bold mb-3">Start Your Precision Agriculture Journey Today</motion.h2>
                <motion.p variants={fadeIn} className="mb-4 mb-lg-0 text-white-75">
                  Join thousands of forward-thinking farmers who are increasing profitability through data-driven decisions.
                </motion.p>
              </Col>
              <Col lg={4} className="d-flex justify-content-lg-end justify-content-center">
                <motion.div variants={fadeIn} className="d-flex gap-3">
                  <Link to="/signup">
                    <Button variant="light" size="lg" className="px-4 py-3 fw-medium text-success">
                      Sign Up Free
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button variant="outline-light" size="lg" className="px-4 py-3 fw-medium">
                      Request Demo
                    </Button>
                  </Link>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-4">
        <Container>
          <Row className="mb-4">
            <Col lg={4} className="mb-4 mb-lg-0">
              <h5 className="fw-bold d-flex align-items-center mb-3">
                <FaSeedling className="me-2 text-success" /> CropSense
              </h5>
              <p className="text-white-50 mb-3">
                Empowering the agricultural revolution through artificial intelligence and precision farming technologies.
              </p>
              <div className="d-flex gap-3">
                <a href="/" className="text-white-50 hover-white"><FaLeaf /></a>
                <a href="/" className="text-white-50 hover-white"><FaChartLine /></a>
                <a href="/" className="text-white-50 hover-white"><GiFarmer /></a>
              </div>
            </Col>

            <Col md={4} lg={2} className="mb-4 mb-md-0">
              <h6 className="fw-bold mb-3">Solutions</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/crop-recommendation" className="text-white-50 text-decoration-none hover-white">Crop Recommendation</Link></li>
                <li className="mb-2"><Link to="/yield-prediction" className="text-white-50 text-decoration-none hover-white">Yield Prediction</Link></li>
                <li className="mb-2"><Link to="/irrigation" className="text-white-50 text-decoration-none hover-white">Irrigation Optimization</Link></li>
                <li className="mb-2"><Link to="/soil-health" className="text-white-50 text-decoration-none hover-white">Soil Health</Link></li>
                <li><Link to="/farm-management" className="text-white-50 text-decoration-none hover-white">Farm Management</Link></li>
              </ul>
            </Col>

            <Col md={4} lg={2} className="mb-4 mb-md-0">
              <h6 className="fw-bold mb-3">Resources</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/blog" className="text-white-50 text-decoration-none hover-white">Blog</Link></li>
                <li className="mb-2"><Link to="/case-studies" className="text-white-50 text-decoration-none hover-white">Case Studies</Link></li>
                <li className="mb-2"><Link to="/webinars" className="text-white-50 text-decoration-none hover-white">Webinars</Link></li>
                <li className="mb-2"><Link to="/documentation" className="text-white-50 text-decoration-none hover-white">Documentation</Link></li>
                <li><Link to="/api" className="text-white-50 text-decoration-none hover-white">API</Link></li>
              </ul>
            </Col>

            <Col md={4} lg={2}>
              <h6 className="fw-bold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none hover-white">About Us</Link></li>
                <li className="mb-2"><Link to="/careers" className="text-white-50 text-decoration-none hover-white">Careers</Link></li>
                <li className="mb-2"><Link to="/partners" className="text-white-50 text-decoration-none hover-white">Partners</Link></li>
                <li className="mb-2"><Link to="/press" className="text-white-50 text-decoration-none hover-white">Press</Link></li>
                <li><Link to="/contact" className="text-white-50 text-decoration-none hover-white">Contact</Link></li>
              </ul>
            </Col>

            <Col lg={2}>
              <h6 className="fw-bold mb-3">Legal</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/privacy" className="text-white-50 text-decoration-none hover-white">Privacy Policy</Link></li>
                <li className="mb-2"><Link to="/terms" className="text-white-50 text-decoration-none hover-white">Terms of Service</Link></li>
                <li className="mb-2"><Link to="/data-policy" className="text-white-50 text-decoration-none hover-white">Data Policy</Link></li>
                <li><Link to="/security" className="text-white-50 text-decoration-none hover-white">Security</Link></li>
              </ul>
            </Col>
          </Row>

          <hr className="border-secondary my-4" />

          <Row className="align-items-center">
            <Col md={6} className="mb-3 mb-md-0">
              <p className="mb-0 small text-white-50">
                © {new Date().getFullYear()} CropSense Technologies, Inc. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="d-flex gap-3 justify-content-md-end">
                <Link to="/sitemap" className="text-white-50 small text-decoration-none hover-white">Sitemap</Link>
                <Link to="/accessibility" className="text-white-50 small text-decoration-none hover-white">Accessibility</Link>
                <Link to="/cookies" className="text-white-50 small text-decoration-none hover-white">Cookie Policy</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        :root {
          --bs-success-rgb: 25, 135, 84;
        }
        .text-gradient-primary {
          background: linear-gradient(90deg, #198754 0%, #2ECC71 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hover-primary:hover {
          color: var(--bs-success) !important;
        }
        .hover-white:hover {
          color: white !important;
        }
        .text-blue {
          color: #3498db;
        }
        .text-brown {
          color: #A0522D;
        }
        .bg-success-light {
          background-color: rgba(var(--bs-success-rgb), 0.1);
        }
        .shadow-sm {
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
        }
        .border-2 {
          border-width: 2px !important;
        }
        .bg-success {
          background-color: #198754 !important;
        }
        .bg-opacity-10 {
          background-color: rgba(25, 135, 84, 0.1) !important;
        }
        .text-success {
          color: #198754 !important;
        }
        .text-white-50 {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        .text-white-75 {
          color: rgba(255, 255, 255, 0.75) !important;
        }
        .border-success {
          border-color: #198754 !important;
        }
      `}</style>
    </>
  );
};

export default Home;
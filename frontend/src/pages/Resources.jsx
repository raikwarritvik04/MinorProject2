import React from 'react';
import { Container, Row, Col, Card, Button, Tab, Tabs, Badge, ListGroup } from 'react-bootstrap';
import { 
  FaBook, FaVideo, FaFileAlt, FaChartLine, FaTools, 
  FaCalendarAlt, FaGlobeAmericas, FaUniversity, FaSeedling 
} from 'react-icons/fa';
import { GiWaterDrop, GiPlantRoots, GiCorn, GiWheat } from 'react-icons/gi';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const Resources = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 bg-light" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f5e9 100%)' }}>
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <Badge bg="success" bgOpacity="10" text="success" className="px-3 py-2 fw-medium mb-3 d-inline-flex align-items-center">
                <p style={{color:'white', text:'bold'}}><br></br><FaSeedling className="me-2" />AGRICULTURAL INTELLIGENCE</p>
                </Badge>
                <h1 className="fw-bold mb-3 display-4">CropSense Resources Center</h1>
                <p className="lead text-muted mb-4">
                  Access our comprehensive library of guides, tools, and research to enhance your farming operations with data-driven insights.
                </p>
                <div className="d-flex gap-3">
                  <Button variant="success" size="lg" className="px-4">
                    Explore Resources
                  </Button>
                  <Button variant="outline-success" size="lg" className="px-4">
                    Submit Resource
                  </Button>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-success bg-opacity-10 p-4 rounded-3">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="bg-white rounded-circle p-3">
                      <FaChartLine className="text-success" size={24} />
                    </div>
                    <h4 className="mb-0">New: 2024 Precision Ag Trends Report</h4>
                  </div>
                  <p className="text-muted">
                    Download our latest research on emerging technologies in precision agriculture and how they're transforming farm productivity.
                  </p>
                  <Button variant="success" size="sm">
                    Download Now
                  </Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Resources Section */}
      <section className="py-5">
        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <Row className="mb-5">
              <Col>
                <h2 className="fw-bold mb-4">Browse Resources by Category</h2>
                <Tabs defaultActiveKey="guides" id="resources-tabs" className="mb-4">
                  <Tab eventKey="guides" title={
                    <span className="d-flex align-items-center">
                      <FaBook className="me-2" /> Guides
                    </span>
                  }>
                    <Row className="g-4 mt-3">
                      {[
                        {
                          title: "Precision Farming Starter Guide",
                          description: "Comprehensive introduction to implementing precision agriculture techniques on your farm",
                          icon: <FaTools size={24} className="text-success" />,
                          type: "PDF Guide",
                          length: "32 pages",
                          new: true
                        },
                        {
                          title: "Soil Health Management",
                          description: "Best practices for maintaining and improving soil quality for sustainable farming",
                          icon: <GiCorn size={24} className="text-warning" />,
                          type: "eBook",
                          length: "45 pages"
                        },
                        {
                          title: "Irrigation Optimization Handbook",
                          description: "Advanced techniques for water conservation and efficient irrigation systems",
                          icon: <FaGlobeAmericas size={24} className="text-info" />,
                          type: "PDF Guide",
                          length: "28 pages"
                        },
                        {
                          title: "Crop Rotation Strategies",
                          description: "Science-based approaches to crop rotation for improved yields and soil health",
                          icon: <GiWheat size={24} className="text-brown" />,
                          type: "Interactive Guide",
                          length: "18 modules"
                        }
                      ].map((resource, index) => (
                        <Col md={6} lg={3} key={index}>
                          <motion.div variants={fadeIn}>
                            <Card className="h-100 border-0 shadow-sm hover-shadow">
                              <Card.Body>
                                <div className="d-flex align-items-center mb-3">
                                  <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                                    {resource.icon}
                                  </div>
                                  {resource.new && (
                                    <Badge bg="success" className="ms-auto">New</Badge>
                                  )}
                                </div>
                                <Card.Title className="mb-2">{resource.title}</Card.Title>
                                <Card.Text className="text-muted small mb-3">
                                  {resource.description}
                                </Card.Text>
                                <div className="d-flex justify-content-between small text-muted">
                                  <span>{resource.type}</span>
                                  <span>{resource.length}</span>
                                </div>
                              </Card.Body>
                              <Card.Footer className="bg-transparent border-0">
                                <Button variant="outline-success" size="sm" className="w-100">
                                  View Details
                                </Button>
                              </Card.Footer>
                            </Card>
                          </motion.div>
                        </Col>
                      ))}
                    </Row>
                  </Tab>
                  <Tab eventKey="videos" title={
                    <span className="d-flex align-items-center">
                      <FaVideo className="me-2" /> Videos
                    </span>
                  }>
                    <Row className="g-4 mt-3">
                      {[
                        {
                          title: "Getting Started with CropSense",
                          description: "Step-by-step tutorial on setting up your farm profile and using key features",
                          duration: "12:45",
                          views: "1.2K",
                          date: "2 weeks ago"
                        },
                        {
                          title: "Interpreting Soil Test Results",
                          description: "How to read and act on your soil analysis reports for optimal fertilization",
                          duration: "18:32",
                          views: "856",
                          date: "1 month ago"
                        },
                        {
                          title: "Yield Prediction Deep Dive",
                          description: "Understanding how our machine learning models generate accurate yield forecasts",
                          duration: "22:15",
                          views: "1.5K",
                          date: "3 months ago"
                        },
                        {
                          title: "Field Data Collection Best Practices",
                          description: "Techniques for gathering accurate field data to feed into our analytics platform",
                          duration: "15:20",
                          views: "2.3K",
                          date: "5 months ago"
                        }
                      ].map((video, index) => (
                        <Col md={6} lg={3} key={index}>
                          <motion.div variants={fadeIn}>
                            <Card className="h-100 border-0 shadow-sm hover-shadow">
                              <div className="ratio ratio-16x9 bg-light">
                                <div className="d-flex align-items-center justify-content-center text-muted">
                                  <FaVideo size={32} />
                                </div>
                              </div>
                              <Card.Body>
                                <Card.Title className="mb-2 fs-6">{video.title}</Card.Title>
                                <Card.Text className="text-muted small mb-3">
                                  {video.description}
                                </Card.Text>
                                <div className="d-flex justify-content-between small text-muted">
                                  <span>{video.duration}</span>
                                  <span>{video.views} views</span>
                                </div>
                              </Card.Body>
                            </Card>
                          </motion.div>
                        </Col>
                      ))}
                    </Row>
                  </Tab>
                  <Tab eventKey="research" title={
                    <span className="d-flex align-items-center">
                      <FaFileAlt className="me-2" /> Research
                    </span>
                  }>
                    <Row className="g-4 mt-3">
                      {[
                        {
                          title: "Impact of AI on Smallholder Farms",
                          author: "Dr. Priya Sharma, AgriTech Institute",
                          date: "March 2024",
                          type: "White Paper",
                          featured: true
                        },
                        {
                          title: "Water Conservation Through Precision Irrigation",
                          author: "Global Water Initiative",
                          date: "January 2024",
                          type: "Research Paper"
                        },
                        {
                          title: "Economic Analysis of Precision Ag Adoption",
                          author: "Food and Agriculture Organization",
                          date: "December 2023",
                          type: "Case Study"
                        },
                        {
                          title: "Machine Learning in Crop Disease Detection",
                          author: "Stanford University",
                          date: "November 2023",
                          type: "Journal Article"
                        }
                      ].map((paper, index) => (
                        <Col md={6} key={index}>
                          <motion.div variants={fadeIn}>
                            <Card className="h-100 border-0 shadow-sm hover-shadow">
                              <Card.Body>
                                {paper.featured && (
                                  <Badge bg="warning" text="dark" className="mb-2">Featured</Badge>
                                )}
                                <Card.Title className="mb-2">{paper.title}</Card.Title>
                                <div className="d-flex align-items-center mb-3">
                                  <FaUniversity className="text-muted me-2" />
                                  <small className="text-muted">{paper.author}</small>
                                </div>
                                <div className="d-flex justify-content-between small text-muted">
                                  <span>{paper.date}</span>
                                  <span>{paper.type}</span>
                                </div>
                              </Card.Body>
                              <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
                                <Button variant="outline-success" size="sm">
                                  Download PDF
                                </Button>
                                <Button variant="link" size="sm" className="text-decoration-none">
                                  Cite This
                                </Button>
                              </Card.Footer>
                            </Card>
                          </motion.div>
                        </Col>
                      ))}
                    </Row>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Tools & Calculators Section */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <Row className="mb-4">
              <Col>
                <h2 className="fw-bold mb-3">Interactive Tools & Calculators</h2>
                <p className="text-muted">
                  Practical tools to help you make informed decisions about your farming operations.
                </p>
              </Col>
            </Row>
            <Row className="g-4">
              {[
                {
                  title: "Fertilizer Calculator",
                  description: "Determine optimal fertilizer application rates based on soil test results",
                  icon: <GiPlantRoots size={32} className="text-success" />
                },
                {
                  title: "Irrigation Scheduler",
                  description: "Create customized irrigation plans based on crop type and weather forecasts",
                  icon: <GiWaterDrop size={32} className="text-info" />
                },
                {
                  title: "Profitability Analyzer",
                  description: "Estimate potential profits based on crop selection and input costs",
                  icon: <FaChartLine size={32} className="text-primary" />
                },
                {
                  title: "Crop Rotation Planner",
                  description: "Plan multi-year crop rotations for optimal soil health and yield",
                  icon: <GiCorn size={32} className="text-warning" />
                }
              ].map((tool, index) => (
                <Col md={6} lg={3} key={index}>
                  <motion.div variants={fadeIn}>
                    <Card className="h-100 border-0 shadow-sm hover-shadow">
                      <Card.Body className="text-center">
                        <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                          {tool.icon}
                        </div>
                        <Card.Title className="mb-2">{tool.title}</Card.Title>
                        <Card.Text className="text-muted small">
                          {tool.description}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="bg-transparent border-0 text-center">
                        <Button variant="success" size="sm">
                          Launch Tool
                        </Button>
                      </Card.Footer>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Events & Webinars Section */}
      <section className="py-5">
        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <Row className="mb-4">
              <Col>
                <h2 className="fw-bold mb-3">Upcoming Events & Webinars</h2>
                <p className="text-muted">
                  Join our live sessions to learn from agricultural experts and industry leaders.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={8}>
                <motion.div variants={fadeIn}>
                  <ListGroup variant="flush">
                    {[
                      {
                        title: "Precision Agriculture for Small Farms",
                        date: "June 15, 2024",
                        time: "10:00 AM - 11:30 AM EST",
                        speaker: "Dr. Samuel Ofori, Agricultural Extension Specialist",
                        type: "Live Webinar",
                        registered: "142 registered"
                      },
                      {
                        title: "Soil Health Workshop Series",
                        date: "June 22-23, 2024",
                        time: "9:00 AM - 3:00 PM EST daily",
                        speaker: "Soil Health Institute Team",
                        type: "Virtual Conference",
                        registered: "89 registered"
                      },
                      {
                        title: "CropSense Platform Deep Dive",
                        date: "July 5, 2024",
                        time: "2:00 PM - 3:30 PM EST",
                        speaker: "CropSense Product Team",
                        type: "Training Session",
                        registered: "210 registered"
                      }
                    ].map((event, index) => (
                      <ListGroup.Item key={index} className="border-0 py-3 px-0">
                        <div className="d-flex gap-4">
                          <div className="bg-success bg-opacity-10 text-success p-3 rounded-3 text-center" style={{ minWidth: '80px' }}>
                            <div className="fw-bold fs-4">{event.date.split(' ')[1]}</div>
                            <div className="small">{event.date.split(' ')[0]}</div>
                          </div>
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <h5 className="mb-1">{event.title}</h5>
                              <Badge bg="success" className="align-self-start">{event.type}</Badge>
                            </div>
                            <p className="mb-1 text-muted small">
                              <FaCalendarAlt className="me-1" /> {event.date} • {event.time}
                            </p>
                            <p className="mb-1 small">
                              <strong>Speaker:</strong> {event.speaker}
                            </p>
                            <p className="mb-0 text-muted small">
                              {event.registered}
                            </p>
                          </div>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </motion.div>
              </Col>
              <Col lg={4}>
                <motion.div variants={fadeIn}>
                  <Card className="border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
                    <Card.Body>
                      <h5 className="mb-3">Stay Updated</h5>
                      <p className="small text-muted mb-3">
                        Subscribe to our newsletter to receive updates on new resources, events, and platform features.
                      </p>
                      <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Your email address" />
                      </div>
                      <Button variant="success" className="w-100 mb-3">
                        Subscribe
                      </Button>
                      <div className="d-flex gap-3 justify-content-center">
                        <Button variant="outline-secondary" size="sm">
                          <i className="bi bi-calendar-plus"></i> Add to Calendar
                        </Button>
                        <Button variant="outline-secondary" size="sm">
                          <i className="bi bi-share"></i> Share
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-success text-white">
        <Container>
          <Row className="align-items-center text-center text-lg-start">
            <Col lg={8}>
              <h2 className="fw-bold mb-3">Have Questions About Our Resources?</h2>
              <p className="mb-4 mb-lg-0 text-white-75">
                Our agricultural experts are ready to help you find the right resources for your needs.
              </p>
            </Col>
            <Col lg={4} className="d-flex justify-content-lg-end justify-content-center">
              <Button variant="light" size="lg" className="px-4 py-3 fw-medium text-success">
                Contact Support
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="bg-dark text-white py-3 mt-auto">
              <Container className="text-center">
                <small>© {new Date().getFullYear()} CropSense. All rights reserved.</small>
              </Container>
            </footer>

      {/* Global Styles */}
      <style jsx global>{`
        .hover-shadow {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
        .bg-opacity-10 {
          background-color: rgba(25, 135, 84, 0.1) !important;
        }
        .text-brown {
          color: #A0522D;
        }
      `}</style>
    </>
  );
};

export default Resources;
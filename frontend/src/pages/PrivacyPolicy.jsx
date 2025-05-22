import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaShieldAlt, FaUserLock, FaDatabase, FaEnvelope, FaCog } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <FaDatabase className="text-primary" />,
      title: "Information We Collect",
      items: [
        "Personal Information: When you register or interact with our services, we may collect your name, email address, and other contact details.",
        "Usage Data: We collect information about how you use our platform to improve our services and user experience.",
        "Input Data: Data you provide for crop recommendation and yield prediction is used solely to generate results and is not shared."
      ]
    },
    {
      icon: <FaCog className="text-success" />,
      title: "How We Use Your Information",
      items: [
        "To provide and maintain our services",
        "To personalize your experience and deliver relevant recommendations",
        "To communicate updates, offers, or important notices",
        "To improve our platform based on usage patterns and feedback"
      ]
    },
    {
      icon: <FaShieldAlt className="text-warning" />,
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. Our security protocols include encryption, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure."
    },
    {
      icon: <FaUserLock className="text-info" />,
      title: "Your Choices",
      content: "You may update or delete your personal information by contacting us. You can also opt out of marketing communications at any time by using the unsubscribe link in our emails or through your account settings."
    },
    {
      icon: <FaShieldAlt className="text-danger" />,
      title: "Third-Party Services",
      content: "We do not sell or rent your personal data. We may use trusted third-party services for analytics, payment processing, or hosting, which are bound by strict confidentiality agreements and GDPR compliance where applicable."
    }
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      
      <Container className="flex-grow-1 py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-success text-white">
                  <h2 className="mb-0">
                    <FaShieldAlt className="me-2" />
                    Privacy Policy
                  </h2>
                </Card.Header>
                <Card.Body className="p-4">
                  <p className="lead">
                    At CropSense, we value your privacy and are committed to protecting your personal information. 
                    This policy explains how we collect, use, and safeguard your data.
                  </p>

                  <div className="mb-4">
                    <p>
                      Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>

                  {sections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="mb-5"
                    >
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3">
                          {section.icon}
                        </div>
                        <h3 className="mb-0">{section.title}</h3>
                      </div>
                      
                      {section.items ? (
                        <ListGroup variant="flush" className="border-top">
                          {section.items.map((item, i) => (
                            <ListGroup.Item key={i} className="border-0 px-0 py-2">
                              {item}
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      ) : (
                        <p>{section.content}</p>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="mb-3">
                      <FaCog className="me-2 text-muted" />
                      Changes to This Policy
                    </h3>
                    <p>
                      We may update this Privacy Policy periodically to reflect changes in our practices. 
                      We will notify you of any significant changes by posting the new policy on our website 
                      and updating the "Last Updated" date. We encourage you to review this policy regularly.
                    </p>

                    <div className="mt-4 p-4 bg-light rounded">
                      <h4 className="mb-3">Contact Us</h4>
                      <p className="mb-2">
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                      </p>
                      <p className="mb-1">
                        <strong>Email:</strong> <a href="mailto:privacy@cropsense.com">privacy@cropsense.com</a>
                      </p>
                      <p>
                        <strong>Mailing Address:</strong> 123 Farm Tech Lane, Agricultural City, AC 12345
                      </p>
                    </div>
                  </motion.div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
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

export default PrivacyPolicy;
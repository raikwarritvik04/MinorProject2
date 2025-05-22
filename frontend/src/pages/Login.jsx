import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert, Row, Col } from 'react-bootstrap';
import { FaUser, FaLock, FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Replace with actual login logic
      alert('Login functionality would be implemented here');
    }, 1500);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={scaleUp}
        className="w-100"
        style={{ maxWidth: '450px' }}
      >
        <Card className="shadow-lg border-0 rounded-3 overflow-hidden">
          {/* Card Header */}
          <div className="bg-success bg-gradient text-white text-center p-4">
            <motion.div variants={fadeIn}>
              <h4 className="mb-0">Welcome Back</h4>
              <p className="mb-0 opacity-75">Sign in to access your account</p>
            </motion.div>
          </div>
          
          {/* Card Body */}
          <Card.Body className="p-4">
            {error && (
              <motion.div variants={fadeIn}>
                <Alert variant="danger" className="mb-4" onClose={() => setError('')} dismissible>
                  {error}
                </Alert>
              </motion.div>
            )}

            <Form onSubmit={handleSubmit}>
              <motion.div variants={fadeIn}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-medium">Email Address</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <FaUser className="text-muted" />
                    </span>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-2"
                      required
                    />
                  </div>
                </Form.Group>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label className="fw-medium">Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <FaLock className="text-muted" />
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="py-2"
                      required
                    />
                  </div>
                </Form.Group>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Row className="mb-3">
                  <Col xs={6}>
                    <Form.Check
                      type="checkbox"
                      id="rememberMe"
                      label="Remember me"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="small"
                    />
                  </Col>
                  <Col xs={6} className="text-end">
                    <Link to="/forgot-password" className="text-decoration-none small text-success fw-medium">
                      Forgot password?
                    </Link>
                  </Col>
                </Row>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Button 
                  variant="success" 
                  type="submit" 
                  className="w-100 py-2 fw-medium"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
              </motion.div>
            </Form>

            <motion.div variants={fadeIn}>
              <div className="d-flex align-items-center my-4">
                <hr className="flex-grow-1" />
                <span className="px-3 small text-muted">OR CONTINUE WITH</span>
                <hr className="flex-grow-1" />
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Row className="g-2 mb-4">
                <Col>
                  <Button variant="outline-danger" className="w-100 py-2">
                    <FaGoogle className="me-2" /> Google
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-primary" className="w-100 py-2">
                    <FaFacebook className="me-2" /> Facebook
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-dark" className="w-100 py-2">
                    <FaApple className="me-2" /> Apple
                  </Button>
                </Col>
              </Row>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <p className="mb-0">
                Don't have an account?{' '}
                <Link to="/signup" className="text-success fw-medium text-decoration-none">
                  Sign up
                </Link>
              </p>
            </motion.div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
};

export default Login;
import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaArrowRight, FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Validation
    if (!acceptTerms) {
      setError('Please accept the terms and conditions');
      setLoading(false);
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill all required fields');
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Account created successfully!');
    }, 1500);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      
      <Container className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-100"
          style={{ maxWidth: '500px' }}
        >
          <Card className="border-0 shadow-sm rounded-3 overflow-hidden">
            <div className="bg-success text-white text-center p-4">
              <h4 className="mb-0">Create Your Account</h4>
              <small className="opacity-75">Join thousands of farmers using CropSense</small>
            </div>
            
            <Card.Body className="p-4">
              {error && (
                <Alert variant="danger" onClose={() => setError('')} dismissible>
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="mb-3">
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <FaUser className="text-muted" />
                    </span>
                    <Form.Control
                      type="text"
                      placeholder="John Doe"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <FaEnvelope className="text-muted" />
                    </span>
                    <Form.Control
                      type="email"
                      placeholder="your@email.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <FaLock className="text-muted" />
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="••••••••"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <small className="text-muted">Minimum 8 characters</small>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Confirm Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <FaLock className="text-muted" />
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="••••••••"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check 
                    type="checkbox" 
                    id="acceptTerms"
                    label={
                      <span>
                        I agree to the <Link to="/terms" className="text-success">Terms of Service</Link> and <Link to="/privacy" className="text-success">Privacy Policy</Link>
                      </span>
                    }
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="small"
                  />
                </Form.Group>

                <Button 
                  variant="success" 
                  type="submit" 
                  className="w-100 py-2 fw-medium d-flex align-items-center justify-content-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account <FaArrowRight className="ms-2" />
                    </>
                  )}
                </Button>
              </Form>

              <div className="text-center mb-4 position-relative">
                <hr className="my-4" />
                <span className="bg-light px-3 position-absolute top-50 start-50 translate-middle text-muted small">
                  OR SIGN UP WITH
                </span>
              </div>

              <div className="d-flex gap-3 mb-4">
                <Button variant="outline-danger" className="flex-grow-1 py-2">
                  <FaGoogle className="me-2" />
                  Google
                </Button>
                <Button variant="outline-primary" className="flex-grow-1 py-2">
                  <FaFacebookF className="me-2" />
                  Facebook
                </Button>
                <Button variant="outline-dark" className="flex-grow-1 py-2">
                  <FaApple className="me-2" /> Apple
                </Button>
              </div>

              <div className="text-center">
                <small className="text-muted">
                  Already have an account?{' '}
                  <Link to="/login" className="text-success fw-medium text-decoration-none">
                    Log in
                  </Link>
                </small>
              </div>
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

export default SignUp;
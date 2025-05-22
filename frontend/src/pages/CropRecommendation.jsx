import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert, Row, Col, Spinner, ProgressBar, Table } from 'react-bootstrap';
import { FaLeaf, FaThermometerHalf, FaTint, FaCloudRain, FaFlask, FaSeedling } from 'react-icons/fa';
import { GiChemicalDrop, GiWateringCan } from 'react-icons/gi';
import { motion } from 'framer-motion';
import axios from 'axios';

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: '',
  });

  // Change: recommendedCrops is now an array of { name, score }
  const [recommendedCrops, setRecommendedCrops] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateInputs = () => {
    for (const key in formData) {
      if (formData[key] === '') {
        setError(`Please enter a valid value for ${getFieldLabel(key)}.`);
        return false;
      }
    }
    setError('');
    return true;
  };

  const getFieldLabel = (field) => {
    const labels = {
      N: 'Nitrogen (N)',
      P: 'Phosphorus (P)',
      K: 'Potassium (K)',
      temperature: 'Temperature',
      humidity: 'Humidity',
      ph: 'Soil pH',
      rainfall: 'Rainfall'
    };
    return labels[field] || field;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateInputs()) return;

    setLoading(true);
    setRecommendedCrops([]);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/recommend', {
        N: parseFloat(formData.N),
        P: parseFloat(formData.P),
        K: parseFloat(formData.K),
        temperature: parseFloat(formData.temperature),
        humidity: parseFloat(formData.humidity),
        ph: parseFloat(formData.ph),
        rainfall: parseFloat(formData.rainfall),
      });

      // Change: handle multiple crops
      const cropsObj = response.data.recommended_crops || {};
      // Convert to array and sort by score descending
      const cropsArr = Object.entries(cropsObj)
        .map(([name, score]) => ({ name, score }))
        .sort((a, b) => b.score - a.score);

      setRecommendedCrops(cropsArr);
    } catch (err) {
      setError(
        err.response?.data?.error ||
        'Failed to get recommendation. Please check your inputs and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Container className="flex-grow-1 py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-5">
            <h2 className="fw-bold text-success mb-3">
              <FaSeedling className="me-2" />
              Crop Recommendation System
            </h2>
            <p className="text-muted">
              Enter your soil and weather conditions to get AI-powered crop recommendations
            </p>
          </div>

          <Card className="border-0 shadow-sm rounded-3 overflow-hidden">
            <div className="bg-success text-white p-4">
              <h4 className="mb-0">Enter Your Farm Details</h4>
            </div>
            
            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit}>
                <h5 className="mb-4 text-success">
                  <GiChemicalDrop className="me-2" />
                  Soil Nutrients
                </h5>
                <Row className="mb-4 g-3">
                  <Col md={4}>
                    <Form.Group controlId="formN">
                      <Form.Label>Nitrogen (N) ppm</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <GiChemicalDrop className="text-success" />
                        </span>
                        <Form.Control
                          type="text"
                          name="N"
                          placeholder="e.g. 25.5"
                          value={formData.N}
                          onChange={handleChange}
                          isInvalid={submitted && formData.N === ''}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formP">
                      <Form.Label>Phosphorus (P) ppm</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <GiChemicalDrop className="text-success" />
                        </span>
                        <Form.Control
                          type="text"
                          name="P"
                          placeholder="e.g. 42.0"
                          value={formData.P}
                          onChange={handleChange}
                          isInvalid={submitted && formData.P === ''}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formK">
                      <Form.Label>Potassium (K) ppm</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <GiChemicalDrop className="text-success" />
                        </span>
                        <Form.Control
                          type="text"
                          name="K"
                          placeholder="e.g. 38.2"
                          value={formData.K}
                          onChange={handleChange}
                          isInvalid={submitted && formData.K === ''}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <h5 className="mb-4 text-success">
                  <FaThermometerHalf className="me-2" />
                  Weather Conditions
                </h5>
                <Row className="mb-4 g-3">
                  <Col md={3}>
                    <Form.Group controlId="formTemperature">
                      <Form.Label>Temperature (°C)</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <FaThermometerHalf className="text-success" />
                        </span>
                        <Form.Control
                          type="text"
                          name="temperature"
                          placeholder="e.g. 28.5"
                          value={formData.temperature}
                          onChange={handleChange}
                          isInvalid={submitted && formData.temperature === ''}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId="formHumidity">
                      <Form.Label>Humidity (%)</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <FaTint className="text-success" />
                        </span>
                        <Form.Control
                          type="text"
                          name="humidity"
                          placeholder="e.g. 65"
                          value={formData.humidity}
                          onChange={handleChange}
                          isInvalid={submitted && formData.humidity === ''}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId="formPH">
                      <Form.Label>Soil pH</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <FaFlask className="text-success" />
                        </span>
                        <Form.Control
                          type="text"
                          name="ph"
                          placeholder="e.g. 6.5"
                          value={formData.ph}
                          onChange={handleChange}
                          isInvalid={submitted && formData.ph === ''}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId="formRainfall">
                      <Form.Label>Rainfall (mm)</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <FaCloudRain className="text-success" />
                        </span>
                        <Form.Control
                          type="text"
                          name="rainfall"
                          placeholder="e.g. 120"
                          value={formData.rainfall}
                          onChange={handleChange}
                          isInvalid={submitted && formData.rainfall === ''}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                {error && (
                  <Alert variant="danger" className="mb-4" onClose={() => setError('')} dismissible>
                    {error}
                  </Alert>
                )}
                <div className="text-center mt-4">
                  <Button 
                    variant="success" 
                    type="submit" 
                    size="lg"
                    className="px-5 py-3 fw-medium"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner animation="border" size="sm" className="me-2" />
                        Analyzing Conditions...
                      </>
                    ) : (
                      <>
                        <FaLeaf className="me-2" />
                        Get Crop Recommendation
                      </>
                    )}
                  </Button>
                </div>
              </Form>
              {/* Change: Show list of recommended crops */}
              {recommendedCrops.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-5"
                >
                  <Card className="border-success">
                    <Card.Header className="bg-success text-white">
                      <h5 className="mb-0">Recommendation Results</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="text-center py-4">
                        <FaSeedling size={48} className="text-success mb-3" />
                        <h3 className="text-success mb-3">
                          Recommended Crops
                        </h3>
                        <Table striped bordered hover responsive className="mt-4">
                          <thead>
                            <tr>
                              <th>Crop</th>
                              <th>Confidence Score</th>
                            </tr>
                          </thead>
                          <tbody>
                            {recommendedCrops.map((crop, idx) => (
                              <tr key={idx}>
                                <td>{crop.name}</td>
                                <td>
                                  <ProgressBar 
                                    now={Math.round(crop.score * 100)} 
                                    label={`${Math.round(crop.score * 100)}%`} 
                                    variant="success"
                                    style={{ height: '24px' }}
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                        <Button 
                          variant="outline-success" 
                          className="me-3"
                          onClick={() => window.location.reload()}
                        >
                          Analyze Another
                        </Button>
                        <Button variant="success">
                          View Growing Tips
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              )}
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

export default CropRecommendation;

import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert, Row, Col, Spinner, ProgressBar } from 'react-bootstrap';
import { FaChartLine, FaThermometerHalf, FaTint, FaCloudRain, FaFlask } from 'react-icons/fa';
import { GiChemicalDrop, GiFarmTractor } from 'react-icons/gi';
import { motion } from 'framer-motion';
import axios from '../services/api';

const YieldPrediction = () => {
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: '',
    area: '',
    crop: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const cropOptions = [
    'cotton', 'horsegram', 'jowar', 'maize', 'moong', 'ragi', 'rice',
    'sunflower', 'wheat', 'sesamum', 'soyabean', 'rapeseed', 'jute',
    'arecanut', 'onion', 'potato', 'sweetpotato', 'tapioca',
    'turmeric', 'barley', 'banana', 'coriander', 'garlic',
    'blackpepper', 'cardamom', 'cashewnuts', 'blackgram', 'coffee',
    'ladyfinger', 'brinjal', 'cucumber', 'grapes', 'mango', 'orange',
    'papaya', 'tomato', 'cabbage', 'bottlegourd', 'pineapple',
    'carrot', 'radish', 'bittergourd', 'drumstick', 'jackfruit',
    'cauliflower', 'watermelon', 'ashgourd', 'beetroot', 'pomegranate',
    'ridgegourd', 'pumpkin', 'apple', 'ginger'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'crop') {
      setFormData({ ...formData, crop: value });
    } else if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
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
      rainfall: 'Rainfall',
      area: 'Farm Area',
      crop: 'Crop'
    };
    return labels[field] || field;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateInputs()) return;

    setLoading(true);
    setPrediction(null);
    setError('');

    try {
      const response = await axios.post('/predict-yield', {
        N: parseFloat(formData.N),
        P: parseFloat(formData.P),
        K: parseFloat(formData.K),
        temperature: parseFloat(formData.temperature),
        humidity: parseFloat(formData.humidity),
        ph: parseFloat(formData.ph),
        rainfall: parseFloat(formData.rainfall),
        area: parseFloat(formData.area),
        crop: formData.crop.toLowerCase()
      });

      setPrediction(response.data);
      setConfidence(response.data.confidence || 0);
    } catch (err) {
      setError(
        err.response?.data?.error ||
        'Failed to get prediction. Please check your inputs and try again.'
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
              <FaChartLine className="me-2" />
              Crop Yield Prediction
            </h2>
            <p className="text-muted">
              Enter your farm details to get AI-powered yield estimation
            </p>
          </div>

          <Card className="border-0 shadow-sm rounded-3 overflow-hidden">
            <div className="bg-success text-white p-4">
              <h4 className="mb-0">Farm Input Parameters</h4>
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
                  <GiFarmTractor className="me-2" />
                  Farm Details
                </h5>

                <Row className="mb-4 g-3">
                  <Col md={6}>
                    <Form.Group controlId="formArea">
                      <Form.Label>Farm Area (hectares)</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <GiFarmTractor className="text-success" />
                        </span>
                        <Form.Control
                          type="text"
                          name="area"
                          placeholder="e.g. 5.2"
                          value={formData.area}
                          onChange={handleChange}
                          isInvalid={submitted && formData.area === ''}
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="formCrop">
                      <Form.Label>Select Crop</Form.Label>
                      <Form.Select
                        name="crop"
                        value={formData.crop}
                        onChange={handleChange}
                        isInvalid={submitted && formData.crop === ''}
                      >
                        <option value="">-- Select Crop --</option>
                        {cropOptions.map((crop, index) => (
                          <option key={index} value={crop}>{crop}</option>
                        ))}
                      </Form.Select>
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
                        Calculating Prediction...
                      </>
                    ) : (
                      <>
                        <FaChartLine className="me-2" />
                        Predict Yield
                      </>
                    )}
                  </Button>
                </div>
              </Form>

              {prediction && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-5"
                >
                  <Card className="border-success">
                    <Card.Header className="bg-success text-white">
                      <h5 className="mb-0">Yield Prediction Result</h5>
                    </Card.Header>
                    <Card.Body>
                      <h4 className="text-success">Estimated Yield: {prediction.yield} tons</h4>
                      <p className="text-muted">Confidence Level</p>
                      <ProgressBar
                        now={confidence * 100}
                        label={`${Math.round(confidence * 100)}%`}
                        variant="success"
                      />
                    </Card.Body>
                  </Card>
                </motion.div>
              )}
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};

export default YieldPrediction;

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    else if (!passwordRegex.test(password)) {
      errors.password =
        'Password must be at least 8 characters long and include 1 uppercase letter, 1 number, and 1 symbol';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      navigate('/home');
    }
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light px-3">
      <Row className="w-100 shadow-lg rounded-4 overflow-hidden bg-white" style={{ maxWidth: '1000px' }}>
        <Col xs={12} md={6} className="p-5">
          <h2 className="fw-bold">Sign In</h2>
          <p className="text-muted">
            New user? <a href="#">Create an account</a>
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Username or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Check type="checkbox" label="Keep me signed in" className="me-2" />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              Sign In
            </Button>

            <div className="text-center my-3">
              <span>Or Sign In With</span>
              <div className="d-flex justify-content-center gap-3 mt-2">
                <i className="bi bi-google"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </Form>
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center p-4 bg-light">
          <img
            src="src/assets/login.png"
            alt="Login Visual"
            className="img-fluid d-none d-md-block"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
// src/components/Auth/Register.js

import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

//console.log(`${process.env.REACT_APP_API_URL}`);
const Register = () => {
    const { username, setUsername, password, setPassword } = useAuth();
    const [confirmPassword,setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            console.error("Passwords do not match");
            return;
        }
        const userData = {
            username,
            password
        };
        try {
            const response = await axios.post(`http://localhost:8080/auth/register`, userData);
            if (response.status === 200) {
                const token = btoa(`${username}:${password}`);
                sessionStorage.setItem('credentials', token);
                navigate('/todo');

            }
        } catch (error) {
            console.error("Registration error:", error.response);
            // Handle errors (e.g., show error message)
        }
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md="6">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="email">Username</Label>
                            <Input
                                name="username"
                                id="username"
                                placeholder="Enter your email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Button type="submit" color="primary">Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;

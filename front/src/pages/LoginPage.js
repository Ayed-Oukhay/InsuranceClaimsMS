import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // submit form data to server for authentication
        // ? ------- calling the backend api and returning the response from the server -------
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ firstname, lastname, cin, phone, email, address, status, img })
            body: JSON.stringify({ username, password })
        })
            .then(response => response.json())
            .then(data => {
                console.log('User authenticated successfully:', data);
                // redirect to home page
                // navigate.push('/home');
            })
            .catch(error => {
                console.error('Error authenticating the user:', error);
            });
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your username with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>

                <br />
                <Button className='btn-primary' type="submit">
                    Login
                </Button>
            </Form>
            <br />
            <Link to="/">Return to the homepage</Link>
        </div>
    );
}

export default LoginPage;
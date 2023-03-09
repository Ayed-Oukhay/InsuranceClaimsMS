import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [cin, setCin] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        // ? ------- calling the backend api and returning the response from the server -------
        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname, lastname, cin, phone, email, address, status })
        })
            .then(response => response.json())
            .then(data => {
                console.log('New user created:', data);
            })
            .catch(error => {
                console.error('Error creating user:', error);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group controlId="firstname">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Enter you first name" value={firstname} onChange={(event) => setFirstname(event.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your data with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="lastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Enter your lastname" value={lastname} onChange={(event) => setLastname(event.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your data with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="cin">
                <Form.Label>CIN</Form.Label>
                <Form.Control type="number" placeholder="Enter you CIN number" value={cin} onChange={(event) => setCin(event.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your data with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Enter your phone number" value={phone} onChange={(event) => setPhone(event.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your data with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your data with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" value={address} onChange={(event) => setAddress(event.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your data with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                {/* <Form.Control type="password" placeholder="Password"  /> */}
                <Form.Select aria-label="Status" value={status} onChange={(event) => setStatus(event.target.value)}>
                    <option>Select the option that best describes your status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                </Form.Select>
            </Form.Group>

            <br />
            <Button className='btn-primary' type="submit">
                Create User
            </Button>
        </Form>
    );
}

export default SignUp;
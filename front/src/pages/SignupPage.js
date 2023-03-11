import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import UploadedImg from '../components/UploadImg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

function SignUp() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [cin, setCin] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');
    const [img, setImg] = useState('');

    // ? --- Uploading a piture and displaying it in real time ---
    const onImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImg(reader.result);
        };

        reader.readAsDataURL(file);
    };
    // ? ---------------------------------------------------------------------

    const handleSubmit = (event) => {
        event.preventDefault();
        // ? ------- calling the backend api and returning the response from the server -------
        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ firstname, lastname, cin, phone, email, address, status, img })
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
        <div>
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="firstname">
                    <Form.Label class="label text-white">First name</Form.Label>
                    <Form.Control type="text" placeholder="Enter you first name" value={firstname} onChange={(event) => setFirstname(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your data with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="lastname">
                    <Form.Label class="label text-white">Last name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your lastname" value={lastname} onChange={(event) => setLastname(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your data with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="cin">
                    <Form.Label class="label text-white">CIN</Form.Label>
                    <Form.Control type="number" placeholder="Enter you CIN number" value={cin} onChange={(event) => setCin(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your data with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="phone">
                    <Form.Label class="label text-white">Phone</Form.Label>
                    <Form.Control type="number" placeholder="Enter your phone number" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your data with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label class="label text-white">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your data with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label class="label text-white">Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" value={address} onChange={(event) => setAddress(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your data with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="status">
                    <Form.Label class="label text-white">Status</Form.Label>
                    <Form.Select aria-label="Status" value={status} onChange={(event) => setStatus(event.target.value)}>
                        <option>Select the option that best describes your status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="img">
                    <Form.Label class="label text-white">Upload you profile picture</Form.Label>
                    <Form.Control type="file" onChange={onImageChange} />
                    <br />
                    {/* ------- Displaying the uploaded image ------- */}
                    {img && <UploadedImg image={img} />}
                </Form.Group> 

                <br />
                <Button className='btn-primary' type="submit">
                    Create User
                </Button>
            </Form>
            <br />
            <Link to="/">Return to the homepage</Link>
        </div>
    );
}

export default SignUp;
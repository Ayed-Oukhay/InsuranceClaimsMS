import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignupPage';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/user" element={<SignUp />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
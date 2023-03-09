import '../assets/styles/Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom'; 

function Homepage() {
  return (
    <div>
      <nav class="main-navbar">
        <img src="" alt="logo" />
        <div className="menu">
          <Link to="/login">Login</Link>
          <br />
          <Link to="/user">Signup</Link>
        </div>
      </nav>
    </div>
  );
}

export default Homepage;

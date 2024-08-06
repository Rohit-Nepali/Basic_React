import { useState } from 'react';
import './App.css';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar.js';
import TextForms from './components/TextForms.js';
import Forms from './components/Forms.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <h2>Home Page</h2>
      <button className="btn btn-primary" onClick={() => navigate("/contact")}>
        Go to Contact
      </button>
    </div>
  );
};

const About = () => (
  <div className="text-center mt-5">
    <h2>About Page</h2>
    <nav>
      <ul className="list-unstyled">
        <li>
          <Link className="nav-link" to="team">Our Team</Link>
        </li>
        <li>
          <Link className="nav-link" to="company">Our Company</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

const Contact = () => <h2 className="text-center mt-5">Contact Page</h2>;
const Team = () => <h2 className="text-center mt-5">Team Page</h2>;
const Company = () => <h2 className="text-center mt-5">Company Page</h2>;


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/TextForms">Texts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Forms">Form</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="company" element={<Company />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/TextForms" element={<TextForms/>}/>
        <Route path="/Forms" element={<Forms/>}/>
      </Routes>
    </Router>
  );
}

export default App;

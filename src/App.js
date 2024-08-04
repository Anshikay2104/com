import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './style.css';
import Login from './components/Login';
import { Signup } from './components/Signup';
import Home from './components/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = ({ cartCount }) => {
    return (
        <section id="header">
            <a href="#"><img src="https://i.postimg.cc/x8ncvFjr/logo.png" alt="Logo" /></a>
            <div>
                <ul id="navbar">
                    <li><Link to="/" className="active">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><a href="#">About</a></li>
                    <li className="cart-icon">
                        <a href="cart.html">
                            <i className="fas fa-shopping-bag"></i>
                            <span className="quantity">{cartCount}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div id="mobile">
                <a href="cart.html"><i className="fas fa-shopping-bag"></i>
                    <span className="quantity">{cartCount}</span>
                </a>
                <i id="bar" className="fas fa-outdent"></i>
            </div>
        </section>
    );
};

const App = () => {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <Router>
            <Header cartCount={cartCount} />
            <Routes>
                <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;

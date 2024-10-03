// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ContactForm from './ContactForm';
import Header from './Header';
import Footer from './Footer';
import './styles.css'; // Стильдер файлы

function App() {
    return (
        <Router>
            <div>
                <Header />
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
                
                <Footer />
            </div>
        </Router>
    );
}

export default App;

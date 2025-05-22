import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import { GiWheat } from 'react-icons/gi';

const Navbar = () => {
  return (
    <header className="sticky-top bg-white shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3 px-0">
          {/* Brand Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="navbar-brand d-flex align-items-center"
          >
            <GiWheat className="text-success me-2" size={28} />
            <Link to="/" className="text-decoration-none">
              <span className="fw-bold fs-4 text-dark">Crop</span>
              <span className="fw-bold fs-4 text-success">Sense</span>
            </Link>
          </motion.div>

          {/* Mobile Toggle */}
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Items */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item mx-2">
                <Link to="/features" className="nav-link px-3 py-2 text-dark fw-medium">
                  Features
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/pricing" className="nav-link px-3 py-2 text-dark fw-medium">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/resources" className="nav-link px-3 py-2 text-dark fw-medium">
                  Resources
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/about" className="nav-link px-3 py-2 text-dark fw-medium">
                  About
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/login" className="nav-link px-3 py-2 d-flex align-items-center">
                  <FaUserCircle className="me-2 text-success" size={18} />
                  <span className="fw-medium">Login</span>
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link to="/signup" className="btn btn-success px-4 py-2 fw-medium">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Animation for active link */}
      <style jsx>{`
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: var(--bs-success) !important;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--bs-success);
          transition: all 0.3s ease;
        }
        .nav-link:hover::after {
          width: calc(100% - 2rem);
          left: 1rem;
        }
        .navbar-toggler:focus {
          box-shadow: 0 0 0 2px rgba(25, 135, 84, 0.3);
        }
      `}</style>
    </header>
  );
};

export default Navbar;
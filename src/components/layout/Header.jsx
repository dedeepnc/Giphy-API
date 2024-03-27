// Import Bootstrap modules
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RiReactjsLine } from 'react-icons/ri';


const Header = () => {
  // Dark mode state and toggle function
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const nextMode = !prevMode;
      document.body.className = nextMode ? 'dark-mode' : '';
      saveTimeDarkModeIsToggled();
      return nextMode;
    });
  };

  // Function to save the time when dark mode is toggled
  function saveTimeDarkModeIsToggled() {
    const now = new Date();
    const darkModeTimes = JSON.parse(localStorage.getItem('darkModeTimes') || '[]');
    darkModeTimes.push(now.getHours());
    localStorage.setItem('darkModeTimes', JSON.stringify(darkModeTimes));
  }

  // Use effect to set dark mode based on time
  useEffect(() => {
    const darkModeTimes = JSON.parse(localStorage.getItem('darkModeTimes') || '[]');
    let averageTime = 0;
    if (darkModeTimes.length > 0) {
      averageTime = darkModeTimes.reduce((previous, current) => previous + current, 0);
      averageTime = averageTime / darkModeTimes.length;
    }
    const now = new Date();
    if (now.getHours() >= averageTime) {
      setDarkMode(true);
      document.body.className = 'dark-mode';
    }
  }, []);

  // Return JSX for the header component
  return (
    <Navbar className='mb-4' bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'}>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <p className='mb-1' style={{ color: darkMode ? 'aqua' : 'black' }} /> GIPHYy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/Search'>Search</Nav.Link>
            <Nav.Link as={Link} to='/projects'>Chart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button
          onClick={toggleDarkMode}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '30px',
          }}
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </Container>
    </Navbar>
  );
};

export default Header;

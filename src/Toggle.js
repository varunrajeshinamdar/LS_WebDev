import React, { useState } from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';
//import NotesApp from './NotesApp';

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark', !darkMode);
    document.body.classList.toggle('text-white', !darkMode);   x``
  };

  return (
    <div>
      <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'}>
        <Container>
          <Navbar.Brand>Notes App</Navbar.Brand>
          <Button variant={darkMode ? 'light' : 'dark'} onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Toggle;

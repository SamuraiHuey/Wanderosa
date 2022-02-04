import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Signup from './pages/Signup';
import Footer from './Footer';
import Hero from './Hero';

function Switcher() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />
      case 'Schedule':
        return <Schedule />
      case 'Signup':
        return <Signup />
      default:
        return <Home />
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
          {renderPage(currentPage)}
      </div>
      <Footer/>
    </div>
  );
}

export default Switcher;
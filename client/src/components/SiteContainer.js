import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './Footer';
import Contact from '../components/pages/Contact'

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
      case 'Login':
        return <Login />
        case 'Contact':
          return <Contact />
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
      <Footer />
    </div>
  );
}

export default Switcher;
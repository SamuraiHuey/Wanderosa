// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavTabs from './NavTabs';
// import Home from './pages/Home';
// import Schedule from './pages/Schedule';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import View from './pages/View';
// import Footer from './Footer';
// import  from '../components/pages/'

// function Switcher() {
//   const [currentPage, handlePageChange] = useState('Home');


//   const renderPage = () => {
//     switch (currentPage) {
//       case 'Home':
//         return <Home />
//       case 'Schedule':
//         return <Schedule />
//       case 'Signup':
//         return <Signup />
//       case 'Login':
//         return <Login />
//       case '':
//         return < />
//       case 'View':
//         return <View />
//       default:
//         return <Home />
//     }
//   };

//   return (
//     <div>
//       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//       <div>
//         {renderPage(currentPage)}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Switcher;

import React from 'react';
import Schedule from './pages/Schedule';
import View from './pages/View';
import Homepage from './pages/Homepage';
//import '../App.css';


import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_ITINERARY } from '../utils/queries';

const Home = () => {
  
  const { data: userData } = useQuery(QUERY_ME);
  

  const loggedIn = Auth.loggedIn();

  return (
    <main>

      <div>
        <Homepage />
      </div>

      <div className="flex-row justify-space-between">
        {loggedIn && userData ? (
          <div className="col-12 mb-3">
            <Schedule />
          </div>
        ) : null}
      </div>

      <div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <View
            />
          </div>
        ) : null}
      </div>

    </main>
  );
};

export default Home;
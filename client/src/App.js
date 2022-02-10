import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/pages/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import Login from './components/pages/Login';
import Schedule from './components/pages/Schedule';
import View from './components/pages/View';
import Signup from './components/pages/Signup';
import Contact from './components/pages/Contact'

import "./App.css"


const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  

function App () {

return (
  <ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/schedule" element={<Schedule/>} />
            <Route exact path="/view" element={<View/>} />
            <Route exact path="/contact" element={<Contact/>} />
{/* Need a contact pathing, when I added a route to it, it broke the CSS */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  </ApolloProvider>
);
}

export default App;
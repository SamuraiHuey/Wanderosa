import React from "react";
import SiteContainer from "./components/SiteContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
  });
  
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

const App = () => <ApolloProvider client={client}> <SiteContainer /> </ApolloProvider>;

export default App;
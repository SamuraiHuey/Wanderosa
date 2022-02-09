import React from "react";
import SiteContainer from "./components/SiteContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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
  
  // const client = new ApolloClient({
  //   link: httpLink,
  //   cache: new InMemoryCache(),
  // });

const App = () => <ApolloProvider client={client}> <SiteContainer /> </ApolloProvider>;

export default App;
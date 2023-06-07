import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App'; 
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

import { AppContext, AppProvider } from './context';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
})
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 

    <ApolloProvider client={client}>
      <AppProvider>
        <App/>
      </AppProvider>
    </ApolloProvider> 
);
  
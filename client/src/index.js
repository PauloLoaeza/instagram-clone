import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import { render } from 'react-dom';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

render(App, document.getElementById('root'));
registerServiceWorker();

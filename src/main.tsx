import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import "./index.css";
import { createUploadLink } from 'apollo-upload-client';

const token=localStorage.getItem('token') || 'tokenyoq';

const client = new ApolloClient({
//   link: createUploadLink({
//     uri: 'http://localhost:5555'
// }),
  uri: 'http://localhost:5555',
  cache: new InMemoryCache(),
  headers:{
    token
  }
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)

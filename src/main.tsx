import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import "./index.css";


const client = new ApolloClient({
  uri: 'http://localhost:5555',
  cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)

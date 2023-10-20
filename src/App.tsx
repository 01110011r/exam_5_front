import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';

function App() {

  return (
  <>
  <h1>
    Hello apollo client!
  </h1>
  <BrowserRouter>
  <Router/>
  </BrowserRouter>
  </>
  )
}

export default App;

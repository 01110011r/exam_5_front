import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';

function App() {

  return (
    <div>
     
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App;

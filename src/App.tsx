import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className=' h-screen bg-red-500 relative'>

      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;

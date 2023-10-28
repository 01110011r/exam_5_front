import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MyContext } from './components/MyContext';

function App() {

  return (
    <div className=' h-screen relative'>

      <BrowserRouter>
      <MyContext>
        <Navbar />
        <Router />
        <Footer />
      </MyContext>
      </BrowserRouter>
    </div>
  )
}

export default App;

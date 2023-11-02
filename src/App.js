import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<h2> <Home/> </h2>} />
        <Route path='/contact' element={<h2> <Contact/> </h2>} />
        <Route path='/signup' element={<h2> <Signup/> </h2>} />
        <Route path='*' element={<h2> Wrong Path 404 💩 </h2>} />
      </Routes>
       <Footer />
    </BrowserRouter>

  );
}



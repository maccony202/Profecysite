
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
         <Routes>
         <Route path='/' element={<Home />}>
        </Route>
        <Route path='/about' element={<About />}>
        </Route>
        <Route path='/products' element={<Products />}>
        </Route>
        <Route path='/contact' element={<Contact />}>
        </Route>
         </Routes>
       
        

    </Router>
  );
}

export default App;

import React from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Moda from './Moda';
import Contact from './Contact';
import Image from './Image';
import    './App.css';

function App() {
    return (<Router>
  <nav>
  <Link to="/" className='item start'>Главная</Link> 
  <Link to="/moda" className='item' >Мода</Link>
  <Link to="/image"className='item ' >Образ </Link>
  <Link to="/contact"className='item' >Контакты </Link>
 
  </nav>
  <Routes >
  <Route path = "/" element ={<Home/>}/> 
  <Route path = "/moda" element ={<Moda/>}/>
  <Route path = "/image" element ={<Image/>}/>
  <Route path = "/contact" element ={<Contact/>}/>
  </Routes> 
  </Router>
    );
}

export default App;


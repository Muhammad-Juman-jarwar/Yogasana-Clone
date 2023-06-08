import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Classes from './components/Classes';
import Yoga from './components/Yoga';
import Pricing from './components/Pricing';

import Contact from './components/Contact';
import './App.css';
import NavBar from './components/home/NavBar';
import Footer from './components/home/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<> <NavBar /> <Footer /> </>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  );
}

export default App;
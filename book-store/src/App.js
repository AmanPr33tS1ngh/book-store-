import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import AddBook from './components/AddBook'
import Books from './components/Book/Books'
import React from "react";
import BooksDetails from "./components/Book/BooksDetails";
import Footer from './components/Footer';
import ReadBook from './components/ReadBook';


function App() {
  return (
    <div className="App">
    <React.Fragment>
      
        <Router>
        <Navbar />
          <Routes> 
            <Route path="/" element={<Home />} exact />
            <Route path="/add" element={<AddBook />} exact />
            <Route path="/books" element={<Books />} exact />
            <Route path="/books/:id" element={<BooksDetails/>} exact />
            <Route path="/read/book/:id" element={<ReadBook/>} exact />
          </Routes>
        </Router>
    </React.Fragment>
    </div>
  );
}

export default App;

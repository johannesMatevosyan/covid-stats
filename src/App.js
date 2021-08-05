import React from 'react';
import { Route } from 'react-router';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MapView from './components/MapView.js';
import Header from './components/static-parts/Header';
import Footer from './components/static-parts/Footer';
import SearchPage from './components/Search/SearchPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='wrapper'>
          <Header />
          <Route exact path='/' component={MapView} />
          <Route exact path='/search' component={SearchPage} />
          <div className='push'></div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

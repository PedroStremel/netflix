
import Header from './components/Header/Header';
import React from 'react';
import HomeBanner from './components/HomeBanner/HomeBanner';
import Login from './components/Login/Login';
import Banner from './components/Banner/Banner';
import List from './components/List/List';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={
            <React.Fragment>
              <Header/>
              <HomeBanner/>
            </React.Fragment>
          }/>
          <Route path='/login' element={
            <React.Fragment>
              <Header/>
            <Login/>
            </React.Fragment>
          }/>
          <Route path='/register' element={
            <React.Fragment>
              <Header/>
            <Login/>
            </React.Fragment>
          }/>
          <Route path='/dashboard' element={
            <React.Fragment>
              <Header/>
              <Banner/>
              <List/>
            </React.Fragment>
          }/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Event from './Components/Event';
import DateBox from './Components/DateBox';
import Help from './Components/Help';
import Payment from './Components/Payment';
import Notes from './Components/Notes';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <>
          {showSignup ? (
            <Signup setIsLoggedIn={setIsLoggedIn} setShowSignup={setShowSignup} />
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} setShowSignup={setShowSignup} />
          )}
        </>
      ) : (
        <>
          <Navbar />
          <Main />
          <Event />
          <DateBox />
          <Notes />
          <Payment />
          <Help />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

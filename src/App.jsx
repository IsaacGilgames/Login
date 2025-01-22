import './App.css';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import UserPage from './components/User/UserPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';  

function App() {
  window.onload = () => localStorage.removeItem('user')
  const [user, setUser] = useState(null);

  useEffect(() => {
        let storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));  // Ha van, beállítjuk a user state-et
        }
    }, []);
    console.log(user)
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          {
            !user ? 
            (<>
              <Route path="/regisztráció" element={<Registration />} />
              <Route path="/" element={<Login />} />
              </>
            ) :
            (
              <>
                <Route path="/" element={<UserPage />} />              
              </>
            )
          }
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Contactus from './Components/Contactus';
import Aboutus from './Components/Aboutus';
import Login from './Components/Login';
import MainBody from './Components/Main/MainBody';
import { useState } from 'react';
import UserProfile from './Components/Main/UserProfile';
import History from './Components/Main/PreviousHistory';
import HistoryItemState from './context/HistoryItemState';

function App() {
  const [login, setlogin] = useState(false);
  const logout = () => {
    setlogin(false);
  }

  return (
    <>
      <HistoryItemState>
        <BrowserRouter>
          <div data-testid="app-component" className="App">
            <Navbar login={login} setlogin={setlogin} logout={logout} />
            <Routes>
              <Route exact path="/" element={<Login login={login} setlogin={setlogin} />} />
              <Route exact path="/logout" element={<Login login={login} setlogin={setlogin} />} />
              <Route exact path="/login" element={<Login login={login} setlogin={setlogin} />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/contactus" element={<Contactus />} />
              {/* <Route exact path="/aboutus" element={<Aboutus />} /> */}
              <Route exact path="/home" element={<MainBody />} />
              <Route exact path="/profile" element={<UserProfile />} />
              <Route exact path="/history" element={<History />} />
            </Routes>
          </div>
        </BrowserRouter>
      </HistoryItemState>
    </>
  );
}

export default App;

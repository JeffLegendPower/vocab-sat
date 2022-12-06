import './App.css';
import Navbar from "./components/navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/home";
import {useState} from "react";
import Login from "./components/login";
import FreeTrial from "./components/pages/freetrial";

function App() {

    const backend_server = 'http://localhost:63343'
    const backend_php = backend_server + '/vocab-sat/src/backend/'

    const [showLogin, setShowLogin] = useState(true)
    const handleLogin = () =>
        setShowLogin(!showLogin)

    return (
      <>
          <Router>
              <Navbar handleLogin={handleLogin}></Navbar>
              <Login
                  open={showLogin}
                  backend={backend_php}
              />
              <Routes>
                  <Route path='/' exact element={<Home backend={backend_php}/>}/>
                  <Route path='/free-trial' element={<FreeTrial/>}/>
              </Routes>
          </Router>
      </>
    );
}

export default App;

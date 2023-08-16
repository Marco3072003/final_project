import Home from './pages/Home';
import Detail from './pages/Detail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {useState} from 'react'

function App() {
  const [isLogOutModal, setIsLogOutModal] = useState(false);

  function handleLogOutModal(){
    isLogOutModal ? setIsLogOutModal(false) : setIsLogOutModal(true)
   }
   function handleLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLogOutModal(false); 
    window.location.href = 'http://localhost:3000/'
  }
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Home handleLogOut={handleLogOut} isLogOutModal={isLogOutModal} handleLogOutModal={handleLogOutModal}/>} />
      <Route exact path='/detail/:id' element={<Detail handleLogOut={handleLogOut} isLogOutModal={isLogOutModal} handleLogOutModal={handleLogOutModal}/>} />
    </Routes>
  </Router>

  );
}

export default App;

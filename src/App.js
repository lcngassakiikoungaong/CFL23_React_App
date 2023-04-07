import Summary from './pages/summary';
import { Route, Routes } from "react-router-dom";
import Live from './pages/live';
import Give from './pages/give';
import Grow from './pages/grow';
import Owe from './pages/owe';
import About from './pages/about';
<<<<<<< HEAD
import Login from './pages/login';
=======
import LogSignin from './pages/login';
import Register from './pages/Register';
>>>>>>> 2239e32e53fc376ecc6c42f5e5f87a77312a7064


function App() {
  return (
    <div className='App'>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Login />} />
=======
        <Route path='/' element={<LogSignin />} />
        <Route path="/Register" element={<Register />} />
>>>>>>> 2239e32e53fc376ecc6c42f5e5f87a77312a7064
        <Route path='/summary' element={<Summary />} />
        <Route path='/live' element={<Live />} />
        <Route path='/give' element={<Give />} />
        <Route path='/grow' element={<Grow />} />
        <Route path='/owe' element={<Owe />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
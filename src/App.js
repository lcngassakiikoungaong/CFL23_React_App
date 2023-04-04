import Summary from './pages/summary';
import { Route, Routes } from "react-router-dom";
import Live from './pages/live';
import Give from './pages/give';
import Grow from './pages/grow';
import Owe from './pages/owe';
import About from './pages/about';
import LogSignin from './pages/login';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LogSignin />} />
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
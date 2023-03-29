import About from "./pages/about.js";
import Live from "./pages/live.js";
import Owe from "./pages/owe.js";
import Give from "./pages/give.js";
import Grow from "./pages/grow.js";
import Summary from "./pages/index.js";
import Loading from "./pages/loading.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path='/about.js' element={<About />} />
          <Route path='/live.js' element={<Live />} />
          <Route path='/owe.js' element={<Owe />} />
          <Route path='/give.js' element={<Give />} />
          <Route path='/grow.js' element={<Grow />} />
          <Route path='/index.js' element={<Summary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
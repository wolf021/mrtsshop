import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screens/Home';
import Contact from './screens/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/"  />
        <Route element={<Contact />} path="/contact"  />
      </Routes>
    </Router>
  );
}

export default App;

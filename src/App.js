import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

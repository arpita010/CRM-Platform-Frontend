import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

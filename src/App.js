import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import RoutesMap from './constants/routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            RoutesMap.map((route, index) => (
              <Route key={"route - " + index} path={route.path} element={route.component} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

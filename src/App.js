import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Calculator } from './pages/Calculator';
import { Main } from './pages/Main';
import { Result } from './pages/Result';



function App() {
  return (
  <div className="bg-menu">
          <Router>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/calculator' element={<Calculator />} />
              <Route path='/result' element={<Result />} />
            </Routes>
          </Router>
  </div>
  );
}

export default App;

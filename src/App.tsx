import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NxtPage from './pages/NxtPage';
import Song from './Song';
import { BooleanProvider } from './ContextAPI';

function App() {

  return (
    <Router>
      <BooleanProvider>
        <div className="App">
          <Song />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/click/yes' element={<NxtPage />} />
          </Routes>
        </div>
      </BooleanProvider>
    </Router>
  );
};

export default App

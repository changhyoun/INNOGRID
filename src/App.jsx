import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router  basename="/INNOGRID">
      <div className='App'>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
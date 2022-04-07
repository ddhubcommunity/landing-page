import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeaderWrap from './components/Header Wrap';
import Index from './pages/Index';
function App() {
  return (
    <Router>
      <HeaderWrap>
        <Routes>
          <Route path='/' element={<Index />}/>
        </Routes>
      </HeaderWrap>
    </Router>
    
  );
}

export default App;

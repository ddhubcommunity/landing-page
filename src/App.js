import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeaderWrap from './components/Header Wrap';
import Index from './pages/Index';
import FooterFull from './components/footer full';
function App() {
  return (
    <Router>
      <HeaderWrap/>
        <Routes>
          <Route path='/' element={<Index />}/>
        </Routes>
      {/* </HeaderWrap> */}
      <FooterFull/>
    </Router>
    
  );
}

export default App;

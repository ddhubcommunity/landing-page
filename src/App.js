import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeaderWrap from './components/Header Wrap';
import Index from './pages/Index';
import FooterFull from './components/footer full';
import Hire from './pages/HIre';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <HeaderWrap/>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/hire' element={<Hire />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      {/* </HeaderWrap> */}
    </Router>
    
  );
}

export default App;

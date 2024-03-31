import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Prices from './Prices.jsx';
import Newsletter from './Newsletter.jsx';
import Semiheader from './Semiheader.jsx';
import HowItWorks from './HowItWorks.jsx';
import Support from './Support.jsx';
import Faq from './Faq.jsx';

function App() {
  return (
    <Router>
      <div className="background-of-all">
        <Header/>
        <Semiheader/>

        <Routes> 
        <Route path="/" element={<Prices />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faq" element={<Faq />} />
        </Routes>
        
        <Newsletter/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

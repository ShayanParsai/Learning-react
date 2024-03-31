import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Prices from './Prices.jsx'
import Filters from './Filters.jsx'
import Newsletter from './Newsletter.jsx'
import Semiheader from './Semiheader.jsx'


function App() {

  return (
    <>
      <div className="background-ofall">
        <Header/>
        <Semiheader/>
        <Filters/>
        <Prices/>
        <Newsletter/>
        <Footer/>
      </div>
    </>
  );

}

export default App
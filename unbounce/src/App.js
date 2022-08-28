import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      {/* <Navbars/> */}
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;

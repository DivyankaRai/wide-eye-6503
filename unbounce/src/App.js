import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Routes/Footer';


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

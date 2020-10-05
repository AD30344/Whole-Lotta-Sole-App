import './mainPage.css';
import ImageHeader from './ImageHeader.js';
import NavBar from './NavBar'
import React from 'react'
import Inventory from './Inventory'
import Title from './Title.js'
import ContactUs from './ContactUs'
//import Banner from 'react-js-banner';

function App () {
    return (
    <div className="container">
     
       <NavBar />
       
       <br></br>
       <br></br>
      <ImageHeader />
      <Title />
     <Inventory />
        <br></br>
        <br></br>
        
        
      <ContactUs />
    </div>
  );
  
}

export default App;

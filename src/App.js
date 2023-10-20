import React from "react";
import Navbar from "./Components/Navbar"
import AboutUs from './Components/AboutUs'
import RightCounter from "./Components/RightCounter";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import ContactPg from "./Components/ContactPg";
import Footer from "./Components/Footer";
import MapCounter from "./Components/MapCounter";




function App() {
  return (
    <><React.Fragment >
      <Navbar />
      <RightCounter />
      <AboutUs  /> 
      <Services/> 
      <ContactUs/> 
      <ContactPg/>
      <MapCounter/>
      <Footer/> 
    </React.Fragment>


    
      
      
      </>
  );
}

export default App;

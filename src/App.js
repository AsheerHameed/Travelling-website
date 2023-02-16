import React from "react";
import "./App.css";
import {
  Navbar,
  Home,
  Services,
  Destinations,
  BookTrip,
  Testimonials,
  Partners,
  Newsletter,
  Footer,
} from "./components";
const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Partners />
     <Newsletter />
      <Footer />  
    </div>
  );
};

export default App;

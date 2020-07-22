import React, { useState } from "react";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Body />
        <Testimonial />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;

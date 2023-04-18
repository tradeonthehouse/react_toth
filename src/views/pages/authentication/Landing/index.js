import React from "react";
import Home from './Home';
import About from './About';
import Services from './Services';
import Others from './Others';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <div>
            <Header />
            <Home />
            <About />
            <Others />
            <Services />
            <Testimonials />
            <Footer />
      </div>
    </div>
  );
}

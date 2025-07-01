// src/pages/LandingPage.jsx
import React from 'react';
import ProjectList from '../components/ProjectList';
import ClientList from '../components/ClientList';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import About from '../components/About';
import Navbar from '../components/Navbar';
import SubscribeForm from '../components/SubscribeForm';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
          <WhyChooseUs/>

      <div id="projects">
        <ProjectList />
      </div>
      <div id="clients">
        <ClientList />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      {/* <div id="subscribe">
        <SubscribeForm />
      </div> */}
      <Footer/>
    </div>
  );
};

export default LandingPage;

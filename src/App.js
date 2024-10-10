import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VehicleSearch from './components/VehicleSearch';
import AboutCompany from './components/AboutCompany';
import FuturedVehicle from './components/FuturedVehicle';
import HowItWorks from './components/HowItWorks';
import WeeklySpecial from './components/WeeklySpecial';
import LatestNews from './components/LatestNews';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="vehicle-search">
        <VehicleSearch />
      </section>
      <section id="about">
        <AboutCompany />
      </section>
      <section id="products">
        <FuturedVehicle />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="gallery">
        <WeeklySpecial />
      </section>
      <section id="latest-news">
        <LatestNews />
      </section>
      <section id="testimonials">
        <TestimonialSection />
      </section>
      <Footer />
    </div>
  );
};

export default App;

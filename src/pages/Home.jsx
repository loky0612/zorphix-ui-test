import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Pricing from '../components/Pricing/Pricing';
import Faq from '../components/FAQ/Faq';
import Testimonial from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import Features from '../components/Features/Features';


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fakeDataFetch();
  }, [])

  return isLoading ? (
    <Loader/>
  ) : (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Features/>
        <Pricing/>
        <Faq/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home;
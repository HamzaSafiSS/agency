import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import EntrySection from './components/EntrySection/EntrySection';
import AboutSection from './components/AboutSection/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import NetworkSection from './components/NetworkSection/NetworkSection';
import FAQSection from './components/FAQSection/FAQSection';
import ContactSection from './components/ContactSection/ContactSection';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EntrySection />
        <AboutSection />
        <ServicesSection />
        <NetworkSection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import EntrySection from './components/EntrySection/EntrySection';
import AboutSection from './components/AboutSection/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import NetworkSection from './components/NetworkSection/NetworkSection';
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
      </main>
    </>
  );
}

export default App;

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import EntrySection from './components/EntrySection/EntrySection';
import AboutSection from './components/AboutSection/AboutSection';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EntrySection />
        <AboutSection />
      </main>
    </>
  );
}

export default App;

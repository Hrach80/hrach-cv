import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import GlobalLoader from './components/GlobalLoader/GlobalLoader';

function App() {
  return (
    <div className="portfolio-app">
      <GlobalLoader />
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Resume/>
      </main>
    </div>
  );
}

export default App;
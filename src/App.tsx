/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import CustomCursor from './components/layout/CustomCursor';
import SmoothScroll from './components/layout/SmoothScroll';
import LoadingScreen from './components/layout/LoadingScreen';
import Hero from './components/sections/Hero';
import InfiniteMarquee from './components/ui/InfiniteMarquee';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import DevelopmentProcess from './components/sections/DevelopmentProcess';
import AISection from './components/sections/AISection';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen selection:bg-white selection:text-black">
        <div className="grain" />
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          <InfiniteMarquee />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <DevelopmentProcess />
          <AISection />
          <Education />
          <InfiniteMarquee items={["LET'S WORK TOGETHER", "HAVE A PROJECT?", "GET IN TOUCH", "AVAILABLE FOR HIRE"]} direction="right" speed={20} />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import { About, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Analytics />
      
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        <div className='relative z-0'>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

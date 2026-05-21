
import { lazy, Suspense } from "react";

import NavBar from "./components/NavBar";
import Herosection from "./components/Herosection";
import Footer from "./components/Footer";

// Lazy-loaded sections
const AboutUs = lazy(() => import("./components/AboutUs"));
const Services = lazy(() => import("./components/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Aboutword = lazy(() => import("./components/Aboutword"));


function App() {
  return (
    <div>
      <NavBar />
      <Herosection />

      <Suspense fallback={<div>Loading...</div>}>
        <AboutUs />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Services />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Aboutword />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
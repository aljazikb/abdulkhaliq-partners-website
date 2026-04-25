
import NavBar from "./components/NavBar"
import Herosection from "./components/Herosection"
import  AboutUs from "./components/AboutUs"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"
import Contact from "./components/Contact"


function App() {
  return (
    <>
    <div className="">

       <NavBar />
       <Herosection/>
       <AboutUs />
       <Services />
       <Portfolio />
       <Contact />
       <Footer />
    </div>
  
    </>
  )
}

export default App

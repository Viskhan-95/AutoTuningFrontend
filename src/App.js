import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import About from "./components/pages/About/About";
import Contacts from "./components/pages/Contacts/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import Navibar from "./components/pages/Navibar/Navibar";
import  Footer from "./components/pages/Footer/Footer";
=======
import Footer from "./components/Footer/Footer";
import Services from './components/pages/Services/Services';
>>>>>>> main

function App() {
  return (
    <>
      <BrowserRouter>
      <Navibar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

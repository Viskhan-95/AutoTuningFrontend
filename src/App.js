import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Navibar from "./components/pages/Navibar/Navibar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

function App() {
   return (
      <>
         <BrowserRouter>
            <Navibar />
            <Routes>
               <Route path="/" element={<HomePage />} />
            </Routes>
            < Footer />
         </BrowserRouter>
      </>
   )
}

export default App;

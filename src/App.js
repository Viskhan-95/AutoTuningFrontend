import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomePage />} />
            </Routes>
         </BrowserRouter>
      </>
   )
}

export default App;

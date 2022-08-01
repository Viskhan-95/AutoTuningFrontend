import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import About from "./components/pages/About/About";
import Contacts from "./components/pages/Contacts/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./components/pages/Services/Services";
import Layout from "./components/Layout/Layout";
import ServiceInfo from "./components/pages/Services/ServiceInfo";
import ScrollToTop from "./components/ScrollToTop";
import Calendar from "react-calendar";
import Admin from "./components/Admin/Admin";
import './index.css';


function App() {
  const role = localStorage.getItem("role");

  if (role === "admin") {

    return (
      <div className='APP'>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />

            <Route path="/*" element={<Layout />}>
              <Route path="services" element={<Services />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="service/:id" element={<ServiceInfo />} />
              <Route path="admin" element={<Admin />} />
            </Route>

            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className='APP'>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />

            <Route path="/*" element={<Layout />}>
              <Route path="services" element={<Services />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="service/:id" element={<ServiceInfo />} />
              <Route path="admin" element={<Navigate to="/" replace />} />
            </Route>

            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;

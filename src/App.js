import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import About from "./components/pages/About/About";
import Contacts from "./components/pages/Contacts/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from './components/pages/Services/Services';
import Layout from "./components/Layout/Layout";
import Footer from "./components/Layout/Footer/Footer";


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<About />} />

					<Route path="/*" element={<Layout />} >
						<Route path="services" element={<Services />} />
						<Route path="contacts" element={<Contacts />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

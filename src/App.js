import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import About from "./components/pages/About/About";
import Contacts from "./components/pages/Contacts/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from './components/pages/Services/Services';
import Layout from "./components/Layout/Layout";


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<Layout />} >

						<Route index element={<HomePage />} />
						<Route path="about" element={<About />} />
						<Route path="contacts" element={<Contacts />} />
						<Route path="services" element={<Services />} />

					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

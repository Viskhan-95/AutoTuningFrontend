import react from 'react';
import { Container } from 'react-bootstrap';
import backgroundImage from "../../icon/backgroundImg.jpeg";
import Navibar from "./Navibar/Navibar";
import Footer from "../Footer/Footer"
import Car from '../Car/Car';
import LearnMore from './Learn-More/LearnMore';

const HomePage = () => {
   return (
      <>
         <Container fluid className="main_content" style={{ color: "white", textAlign: "center" }}>
            <h1>АВТОТЮНИНГ</h1>
      
         </Container>
         <LearnMore />
         <Footer />
      </>
   )
};
export default HomePage;
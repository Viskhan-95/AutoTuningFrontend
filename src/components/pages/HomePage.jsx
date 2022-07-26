import { Container } from 'react-bootstrap';
import backgroundImage from "../../icon/backgroundImg.jpeg";
import Navibar from "./Navibar/Navibar";
import Footer from "../Footer/Footer"
import LearnMore from './Learn-More/LearnMore';

const HomePage = () => {
   return (
      <>
         <Container fluid style={{
            backgroundImage: `url(${backgroundImage}`,
            height: "100vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
         }}>
         <Navibar />
         </Container>
         <LearnMore />
         <Footer />
      </>
   )
};
export default HomePage;
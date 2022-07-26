import { Button, Container } from "react-bootstrap";
import LearnMore from "../Learn-More/LearnMore";
import Navibar from "../Navibar/Navibar";
import Footer from "../../Layout/Footer/Footer";
import { Link } from "react-router-dom";
import Features from "../WeFeatures/Features";

const HomePage = () => {
   return (
      <>
         {Navibar(100)}

         <Container style={{
            position: "absolute",
            color: "white",
            fontSize: "30px",
            width: "50%",
            marginTop: "-500px",
            marginBottom: "100px",
            marginLeft: "370px",
            textAlign: "center"
         }}>
            <div style={{ marginBottom: "150px" }}>
               <h1>АВТОТЮНИНГ</h1>
            </div>
            <Container className="d-flex justify-content-center">
               <Link to="/services" >
                  <Button className="ship_button">
                     наши услуги
                  </Button>
               </Link>
               <Link to="/about">
                  <Button className="ship_button">
                     о нас
                  </Button>
               </Link>
            </Container>
         </Container>

         <LearnMore />
         <Footer />
      </>
   )
};
export default HomePage;
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServices } from "../../../features/services/servicesSlice";
import LearnMore from "../Learn-More/LearnMore";
import Navibar from "../Navibar/Navibar";
import Footer from "../../Layout/Footer/Footer"
import Car from '../../Car/Car';
import { Link } from "react-router-dom";
import Features from "../WeFeatures/Features";

const HomePage = () => {
   const services = useSelector((state) => state.services.services);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getServices());
   }, [dispatch]);

   return (
      <>
         {Navibar(100)}

         <Container style={{
            position: "absolute",
            color: "white",
            fontSize: "30px",
            width: "50%",
            marginTop: "-550px",
            marginLeft: "370px",
            textAlign: "center"
         }}>
            <div style={{ marginBottom: "70px" }}>
               <h1>ДОБРО ПОЖАЛОВАТЬ В <br /> BROOKLYN-AUTOTUNING</h1>
            </div>
            <Container className="d-flex justify-content-center">
               <Link to="/services" >
                  <Button className="ship_button"
                     style={{
                        width: "200px",
                        height: "70px",
                        margin: "0 20px",
                        fontSize: "20px",
                     }}
                  >
                     наши услуги
                  </Button>
               </Link>
               <Link to="/about">
                  <Button className="ship_button"
                     style={{
                        width: "200px",
                        height: "70px",
                        margin: "0 20px",
                        fontSize: "20px",
                     }}
                  >
                     о нас
                  </Button>
               </Link>
            </Container>

            {services.map((service) => {
               <Container>
                  <Card style={{ borderRadius: "15px", cursor: "pointer" }} className="h-100 b-radius-3"
                     variant="top" >
                     <Card.Body >
                        <Card.Title>{service.title}</Card.Title>
                        <Card.Text>
                           {service.text}
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </Container>
            })}
         </Container>

         <Features />
         <LearnMore />
         <Footer />
      </>
   )
};
export default HomePage;
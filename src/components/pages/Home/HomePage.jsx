import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServices } from "../../../features/services/servicesSlice";
import LearnMore from "../Learn-More/LearnMore";
import Car from "../../Car/Car"
import Features from "../WeFeatures/Features"
import Navibar from "../Navibar/Navibar";
import Footer from "../../Layout/Footer/Footer"
import { Link } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const HomePage = () => {
   const services = useSelector((state) => state.services.services);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getServices());
   }, [dispatch]);

   const responsive = {
      0: { items: 1 },
      568: { items: 2 },
      1024: { items: 3 },
   };

   const styleCard1 = "0px 5px 10px 2px rgba(34, 60, 80, 0.2)"

   const itemsServices = services.map((service, index) => {
      const styleCard = index % 2 === 0 && styleCard1
      return (
         <Container className="item" date-value={index} style={{
            marginTop: "25px"
         }}>
            <Card style={{
               border: "none",
               padding: "10px",
               margin: 0,
               boxShadow: styleCard,
            }}
               variant="top" >
               <Card.Body >
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>
                     {service.text}
                  </Card.Text>
               </Card.Body>
            </Card>
         </Container>
      )
   })

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
         </Container>
         <Container style={{
            boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset",
            width: "80%",
            backgroundColor: "white",
            marginTop: "-150px",
         }}>
            <AliceCarousel
               mouseTracking
               items = {itemsServices}
               responsive = {responsive}
               controlsStrategy = "alternate"
               autoPlay = "true"
               autoPlayInterval = "4000"
               autoPlayStrategy = "default"
               disableDotsControls = "false"
               infinite = "true"
               animationType="fadeout"
               activeIndex = "1"
            />
         </Container>
         <Car />
         <Features />
         <LearnMore />
         <Footer />
      </>
   )
};
export default HomePage;
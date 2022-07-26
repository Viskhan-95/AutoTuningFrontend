import React from 'react';
import Footer from '../../Footer/Footer';
import Navibar from '../Navibar/Navibar';
import "./styles.css"
import { Container } from 'react-bootstrap';
import backgroundImage from "../../../icon/backgroundImg.jpeg";


const About = () => {
    return (
        <div className="about">
            <Container fluid style={{
            backgroundImage: `url(${backgroundImage}`,
            height: "100vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
         }}>
         <Navibar />
         </Container>
            <div className="site_title">
                <h1 className="title_text_1">Качественный стайлинг</h1>
                <div className="title_text_2">для Вашего автомобиля в Москве</div>
                <div className="title_text_3">с гарантией на все виды работ и оборудование</div>
            </div>
            <div className="benefits_block">
                <h2 className="benefits_text">Преимущества работы с нами</h2>
            </div>
            <Footer />
        </div>
    );
};

export default About;
import React from 'react';
import "./styles.css";
import Navibar from '../../Layout/Navibar/Navibar';
import Footer from '../../Layout/Footer/Footer';
import WeFeatures from "../WeFeatures/Features"

const About = () => {
    return (
        <div className="about">
            {Navibar(100)}
            <div className="site_title">
                <h1 className="title_text_1">Качественный <br></br> стайлинг</h1>
                <div className="title_text_2">для Вашего автомобиля в Грозном</div>
                
            </div>
            <div className='benefits_block_parent'> 
                <div className="benefits_block">
                <h2 className="benefits_title">Преимущества работы с нами
                <br /><br /><WeFeatures />
                </h2>
                </div>
            </div>
           
            <Footer />
        </div>
    );
};

export default About;
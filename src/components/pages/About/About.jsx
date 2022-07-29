import React from "react";
import "./styles.css";
import Navibar from "../../Layout/Navibar/Navibar";
import Footer from "../../Layout/Footer/Footer";
import WeFeatures from "../WeFeatures/Features";
import bmwBack from "../../../icon/aboutUs.jpg";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="about">
      {Navibar(100)}
      <div className="site_title">
        <h1 className="title_text_1">
          Качественный <br></br> стайлинг
        </h1>
        <div className="title_text_2">для Вашего автомобиля в Грозном</div>
      </div>
      <div className="benefits_block_parent">
        <div className="benefits_block">
          <h2 className="benefits_title">
            ⠀Преимущества работы с нами
            <br />
            <br />
            <WeFeatures />
          </h2>
        </div>
      </div>
      <div className="trustUs" style={{ backgroundImage: `url(${bmwBack}` }}>
        <div className="trustUs_content">
          <p className="trustUs_title">Нам доверяют</p>
          <div className="trustUs_clients">
            <p className="trustUs_number">
              <CountUp end={648} duration={5} />
            </p>
            <p className="trustUs_text">довольных клиентов</p>
          </div>
          <div className="trustUs_cities">
            <p className="trustUs_number">
              <CountUp end={36} duration={5} />
            </p>
            <p className="trustUs_text">городов</p>
          </div>
          <div className="trustUs_coutries">
            <p className="trustUs_number">
              <CountUp end={12} duration={5} />
            </p>
            <p className="trustUs_text">стран</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

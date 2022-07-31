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
      <div className="countup_block">
        <div className="countup_content">
          <div className="countup_number_and_text">
            <p className="countup_number">
              <CountUp end={648} duration={3} />
            </p>
            <p className="countup_text">довольных клиентов</p>
          </div>
          <div className="countup_number_and_text">
            <p className="countup_number">
              <CountUp end={36} duration={3} />
            </p>
            <p className="countup_text">городов</p>
          </div>
          <div className="countup_number_and_text">
            <p className="countup_number">
              <CountUp end={12} duration={3} />
            </p>
            <p className="countup_text">стран</p>
          </div>
        </div>
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
          <div className="trustUs_title">Нам доверяют</div>
          <div className="trustUs_text">
            Наша компания была основана в 2011 году, а наш интернет-магазин стал
            одним из первых магазинов, осуществляющих online продажу тюнинга в
            регионе. Компания специализируется на оптовой и розничной продаже
            тюнинга и аксессуаров не только в Чеченской республике и РФ, но и по всему миру.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

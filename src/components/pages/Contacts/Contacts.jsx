import React from "react";
import "./styles.css";

const Constacts = () => {
  return (
    <div className="contacts">
      <div className="street_and_we_contacts">
        <div className="we_contacts">Наши контакты</div>
        <div className="street">Трошева ул., 7, Грозный</div>
      </div>
      <div className="share_block">
        <div className="share_text">Присоединяйтесь к нам в соц.сетях:</div>
        <div className="logo_block">
          <img
            className="vk_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg"
            alt=""
          />
          <img
            className="facebook_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Facebook_F_icon.svg"
            alt=""
          />
          <img
            className="instagram_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
            alt=""
          />
          <img
            className="twitter_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
            alt=""
          />
        </div>
      </div>
      <div className="numbers_button_and_email">
        <div className="numbers">
          +7 (123) 45-67-890 <br /> +7 (111) 45-67-890
        </div>
        <button className="ship_phone">Заказать звонок</button>
        <div className="email">sitename@mail.ru</div>
      </div>
      <iframe
        className="map"
        title="sd"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.475374934759!2d45.69129347920735!3d43.32524065179668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d1602b158ffd%3A0xad6cb8a3b8dcca97!2z0YPQuy4g0JMg0J0g0KLRgNC-0YjQtdCy0LAsIDcsINCT0YDQvtC30L3Ri9C5LCDQp9C10YfQtdC90YHQutCw0Y8g0KDQtdGB0L8uLCAzNjQwNTE!5e0!3m2!1sru!2sru!4v1658740176206!5m2!1sru!2sru"
        width="1250"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Constacts;
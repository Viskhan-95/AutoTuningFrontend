import React from "react";
import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getServices } from "../../features/services/servicesSlice";

const Car = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <div className="car">
      <div className="car_service">
        <div className="service-info">
          Для выбора услуги наведите курсор на деталь
          <p>или смотрите <Link className="link" to="/services">
              все услуги списком
            </Link>
          </p>
        </div>
        {services.map((el) => {
            return (
          <div onMouseOver={() => setOpened(!opened)} className="blue_circle">
            <div className="white_circle"></div>
            {opened && (
              <div className={el.class}>
                <div className="title">{el.title}</div>
                <div className="text">{el.text}</div>
                <div className="buttons">
                  <button className="more">Подробнее</button>
                  <button className="get_form">Узнать цену</button>
                </div>
              </div>
            )}
          </div>)
        })}
      </div>
    </div>
  );
};

export default Car;

import React, { useRef } from "react";
import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getServices } from "../../features/services/servicesSlice";
import Card from "./ServiceCard";

const Car = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);

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
            <Card el={el} />
            )
        })}
      </div>
    </div>
  );
};

export default Car;

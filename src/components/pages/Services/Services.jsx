import React from "react";
import styles from "./Services.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Service from "./Service";
import { getServices } from "../../../features/services/servicesSlice";

function Services() {
  const services = useSelector((state) => state.services.services);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    
    <div className={styles.services_container}>
      <h1 className={styles.pagetitle}>Услуги</h1>
      <div className={styles.services_content_parent}>
      {services.map((item) => (
        <Service item={item} />
      ))}
      </div>
    </div>
  );
}

export default Services;

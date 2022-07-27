/* eslint-disable array-callback-return */
import React from "react";
import styles from "./Services.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getServices } from "../../../features/services/servicesSlice";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Reviews from "../Reviews/Reviews";

function ServiceInfo() {
  const { id } = useParams();
  const services = useSelector((state) => state.services.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <div className={styles.services_container}>
      {services.map((item) => {
        if (id === item._id) {
          return (
            <div>
              <h1 className={styles.pagetitle}>{item.title}</h1>
              <div className={styles.back_to_services}>
                <a href="/services">
                  <HiOutlineArrowLeft className={styles.iconArrow} />В ОБЩИЙ
                  РАЗДЕЛ
                </a>
              </div>
              <div className={styles.text_description}>
                <p>{item.text}</p>
              </div>
              <div className={styles.images_block}>
                {item.img.map((itemImg) => {
                  return (
                    <div className={styles.image_container}>
                      <img src={`http://localhost:4000${itemImg}`} alt="" />
                    </div>
                  );
                })}
              </div>
              <hr style={{ width: "99%", border: "1px solid", marginTop: "5%" }} />
              <Reviews />
            </div>
          );
        }
      })}
    </div>
  );
}

export default ServiceInfo;

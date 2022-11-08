import React from "react";
import { Link } from "react-router-dom";
import styles from "./Services.module.css";
import { serverUrl } from "../../../server";


function Service({ item }) {

  return (
    <div
      style={{
        backgroundImage: `url(${`${serverUrl}${item.img[0]}`})`, 
      

      }}
      className={styles.services_content}
      >
      <div className={styles.title_and_btn}>
        <div className={styles.element_title}>{item.title}</div>
        <div className={styles.element_button}>
      {console.log(item.img[0])}
        <Link to={`/service/${item._id}`}><button className={styles.btn}>
            Подробнее
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default Service;

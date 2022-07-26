import React from "react";
import { Link } from "react-router-dom";
import styles from "./Services.module.css";

function Service({ item }) {
<<<<<<< HEAD
   return (
      <div
         style={{
            backgroundImage: `url(${`http://localhost:4000${item.img}`})`,
         }}
         className={styles.services_content}
      >
         <div className={styles.title_and_btn}>
            <div className={styles.element_title}>{item.title}</div>
            <div className={styles.element_button}>
               <a href>
                  <button>Подробнее</button>
               </a>
            </div>
         </div>
=======
  return (
    <div
      style={{
        backgroundImage: `url(${`http://localhost:4000${item.img}`})`,
      
      }}
      className={styles.services_content}
    >
      <div className={styles.title_and_btn}>
        <div className={styles.element_title}>{item.title}</div>
        <div className={styles.element_button}>
            <button className={styles.btn}><Link to="/servic"> Подробнее</Link></button>
        </div>
>>>>>>> 90187483cdf2742b4a002d4024efbd04197c84ee
      </div>
   );
}

export default Service;

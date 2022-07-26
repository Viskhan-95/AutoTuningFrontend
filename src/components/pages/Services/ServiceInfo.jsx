import React from "react";
import styles from "./Services.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function ServiceInfo() {
  return (
    <div className={styles.services_container}>
      <h1 className={styles.pagetitle}></h1>
      <div className={styles.text_description}>
        <p></p>
        <p></p>
      </div>
      <div></div>
    </div>
  );
}

export default ServiceInfo;

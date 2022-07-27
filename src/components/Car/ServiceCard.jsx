import React from "react";
import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServices } from "../../features/services/servicesSlice";

function Card({ el }) {
  const dispatch = useDispatch();

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);
    return (
      <div onMouseOver={() => setOpened(!opened)} className={`service ${el.class}`}>
            {opened && (    
              <div className="card">
                <div className="title"><h3>{el.title}</h3></div>
                <div className="text">{el.text}</div>
                <div className="buttons">
                  <button className="more">Подробнее</button>
                  <button className="get_form">Узнать цену</button>
                </div>
              </div>
            )}
          </div>
    );
  }
  
  export default Card;
  
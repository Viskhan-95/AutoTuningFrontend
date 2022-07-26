import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const LearnMore = () => {
  const [text, setText] = useState("");
  const [text_number, setTextNumber] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }

  function handleTextNumber(e) {
    setTextNumber(e.target.value);
  }

  function handleBtn(e) {
    e.preventDefault();
    setText("");
    setTextNumber("");
  }

  return (
    <div className="learn-container">
      <div className="learn">
        <div className="learn-title">Узнайте подробнее о наших услугах</div>
        <div className="learn-description">
          Готовый сайт на тему автотюнинга, сто, ремонт авто на cms modx
          revolution. Один из важнейших наших принципов – это постоянное
          дополнение новых услуг для того, чтобы клиент мог в одном месте
          доверить свой автомобиль «в одни руки» и получить качественные услуги
          не только по ремонту, но и техобслуживанию, уходу, изменению внешнего
          вида своего любимца. На данный момент мы можем оказать для своих
          клиентов более 50 услуг от простейших замены масла и диагностики
          ходовой до сложнейших восстановление геометрии кузова и локальной
          покраски.
        </div>
        <div className="learn-tags">
          <Link to="#" className="tag">Оклейка автомобиля</Link>
          <Link to="#" className="tag">Тонировка стекол</Link>
          <Link to="#" className="tag">Защита от угона</Link>
          <Link to="#" className="tag">Полировка кузова</Link>
          <Link to="#" className="tag">Установка доп. оборудования</Link>
          <Link to="#" className="tag">Пошив чехлов, переобтяжка салона</Link>
          <Link to="#" className="tag">Шумоизоляция</Link>
          <Link to="#" className="tag">Установка led и ксенона</Link>
          <Link to="#" className="tag">Покраска дисков и суппортов</Link>
          <Link to="#" className="tag">Тюнинг и восстановление фар</Link>
          <Link to="#" className="tag">Антигравийная защита</Link>
        </div>
      </div>
      <div className="learn-form">
        <form onSubmit={(e) => handleBtn(e)} action="">
          <div className="form-head">
            <div className="head-title">Есть вопросы?</div>
            <div className="head-text">
              Оставьте заявку и получите бесплатную консультацию специалиста
            </div>
          </div>
          <div className="form-body">
            <div className="form_body_data">
              <label className="label" htmlFor="">
                Представьтесь<span> *</span>
              </label>
              <br />
              <input
                required
                minLength={4}
                maxLength={16}
                onChange={handleText}
                value={text}
                type="text"
              />
              <br />
              <label className="label" htmlFor="">
                Номер телефона<span> *</span>
              </label>
              <br />
              <input
                required
                value={text_number}
                onChange={handleTextNumber}
                minLength={10}
                maxLength={12}
                type="tel"
                placeholder="7(999)999-99-99"
                pattern="[0-9]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
              />
              <br />
              <br />
              <label htmlFor="">Email (не обязательно)</label>
              <br />
              <input type="email" />
              <br />
              <button className="ship_button">Получить консультацию</button>
              <br />
              <div className="form-end">Мы свяжемся с Вами в течение часа</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LearnMore;

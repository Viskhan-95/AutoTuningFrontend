import React, { useState } from "react";
import "./style.css";
import { useEffect} from "react";
import { useDispatch,} from "react-redux";
import { Link } from "react-router-dom";
import { getServices } from "../../features/services/servicesSlice";

function Card({ el }) {
  const [call, setCall] = useState(false);
  const [text, setText] = useState("");
  const [text_number, setTextNumber] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  function handleText(e) {
    setText(e.target.value);
  }

  function handleTextNumber(e) {
    setTextNumber(e.target.value);
  }

  function handleOpenCall() {
    setCall(!call);
    setText("");
    setTextNumber("");
  }
  function handleBtn(e) {
    e.preventDefault();
    setText("");
    setTextNumber("");
  }
    return (
      <div className={`service ${el.class}`}> 
              <div className="card">
                <div className="title"><h3>{el.title}</h3></div>
                <div className="text">{el.text}</div>
                <div className="buttons">
                  <Link to={`service/${el._id}`}><button className="more">Подробнее</button></Link>
                  <button onClick={handleOpenCall} className="get_form">Узнать цену</button>
                </div>
              </div>
              {call && (
          <div className="set_call_block1">
            <div className="call_block1">
              <form
                onSubmit={(e) => handleBtn(e)}
                className="call_form1"
                action=""
              >
                <div className="form_head1">
                  <div className="form_head_title1">Обратный звонок</div>
                  <div className="form_head_text1">
                    Заполните форму и наш менеджер свяжется с <br /> Вами в
                    ближайщее время
                  </div>
                </div>
                <div className="form_body1">
                  <div className="form_body_data1">
                    <label className="label1" htmlFor="">
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
                    <label className="label1" htmlFor="">
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
                    <button className="ship_button1">Заказать звонок</button>
                  </div>
                </div>
              </form>
              <div onClick={handleOpenCall} className="form_close1">
                <img
                  src="https://tuning.sboxdemo.ru/assets/template/images/form_close.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
          </div>
    );
  }
  
  export default Card;
  
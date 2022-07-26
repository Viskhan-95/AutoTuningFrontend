import React from "react";
import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServices } from "../../features/services/servicesSlice";
import { Link } from "react-router-dom";
import { postCallReqs } from "../../features/callReqs/callReqsSlice";

function Card({ el }) {
  const [call, setCall] = useState(false);
  const [text, setText] = useState("");
  const [text_number, setTextNumber] = useState("");
  const [email, setEmail] = useState("")

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
  function handleEmail(e) {
    setEmail(e.target.value);
  }


  function handleOpenCall() {
    setCall(!call);
    setText("");
    setTextNumber("");
  }
  function handleBtn(e) {
    dispatch(postCallReqs({text, text_number, email}))
    setText("");
    setTextNumber("");
    setEmail("")
    
  }
    return (
      <div className={`service ${el.class}`}> 
              <div className="card">
                <div className="title"><h4>{el.title}</h4></div>
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
                      maxLength={15}
                      type="tel"
                      placeholder="7(999)999-99-99"
                    />
                    <br />
                    <br />
                    <label htmlFor="">Email (не обязательно)</label>
                    <br />
                    <input type="email" value={email} onChange={handleEmail}/>
                    <br />
                    <button onClick={handleBtn} className="ship_button1">Заказать звонок</button>
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
  
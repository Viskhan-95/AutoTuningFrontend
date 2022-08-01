/* eslint-disable array-callback-return */
import React, { useState } from "react";
import styles from "./Services.module.css";
import "./Services.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getServices } from "../../../features/services/servicesSlice";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Reviews from "../Reviews/Reviews";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";
import { addTurns, delTurn, getTurn } from "../../../features/turns/turnsSlice";
import { Link } from "react-router-dom";

function ServiceInfo() {
  const user = localStorage.getItem("user");
  const userId = localStorage.getItem("userId");
  const turn = useSelector((state) => state.turn.turns);

  const services = useSelector((state) => state.services.services);
  const [show, setShow] = useState(false);
  const [contact, setContact] = useState("");
  const [calendarValue, onChangeCalendar] = useState(new Date());
  const [calendarShow, setCalendarShoww] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseCalendar = () => setCalendarShoww(false);
  const handleShowCalendar = () => setCalendarShoww(true);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTurn());
    dispatch(getServices());
  }, [dispatch]);

  const handleRemove = (i) => {
    dispatch(delTurn(i));
  };

  const reserved = turn.find((item) => {
    if (item.user === userId) {
      if (item.service === id) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  });

  const checkInMonth = calendarValue.getUTCMonth() + 1;
  const checkInDay = calendarValue.getUTCDate() + 1;
  const checkInYear = calendarValue.getUTCFullYear();

  const checkInValue = checkInYear + "-" + checkInMonth + "-" + checkInDay;

  const allDate =
    Date.parse(calendarValue) - Date.parse(new Date()) > -120253000;

  const qw = turn.map((item) => new Date(item.date));

  const handleAddDate = (title) => {
    handleCloseCalendar();
    dispatch(addTurns({ contact, checkInValue, title, userId }));
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);
  return (
    <div className={styles.services_container}>
      {services.map((item, index) => {
        if (id === item._id) {
          return (
            <div key={index}>
              <div className={styles.zapicNaUslugu}>
                <h1 className={styles.pagetitle}>{item.title}</h1>
                <div>
                  <>
                    {reserved ? (
                      turn.map((item) => {
                        return (
                          userId === item.user &&
                          item.service === id && (
                            <>
                              <div>Вы записаны на </div>
                              <div>{item.date}</div>
                              <button
                                className={styles.enroll_btn}
                                onClick={() => handleRemove(item._id)}
                              >
                                Отменить запись
                              </button>
                            </>
                          )
                        );
                      })
                    ) : (
                      <Button
                        className={styles.enroll_btn}
                        variant="primary"
                        onClick={handleShow}
                      >
                        Записаться
                      </Button>
                    )}

                    <Modal
                      show={show}
                      onHide={handleClose}
                      style={{ fontFamily: "Roboto Condensed, sans-serif" }}
                    >
                      <Container className="d-flex justify-content-between align-items-center">
                        <Modal.Title
                          style={{
                            margin: "10px auto",
                            color: "black",
                          }}
                        >
                          Запись на услугу
                        </Modal.Title>
                        <span style={{color: "black"}}>{user}</span>
                      </Container>

                      <Modal.Body>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label style={{ color: "black" }}>
                              Номер телефона
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Введите номер телефона"
                              style={{borderRadius: "0%"}}
                              onChange={handleContact}
                              value={contact}
                              autoFocus
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          ></Form.Group>
                          <>
                            <Button
                              className={styles.modal_btn}
                              variant="primary"
                              onClick={handleShowCalendar}
                            >
                              Выбрать дату
                            </Button>
                            <Container
                              className="d-flex"
                              style={{
                                width: "60%",
                                fontSize: "17px",
                                marginTop: "30px",
                                marginLeft: "-20px",
                              }}
                            >
                              <Container
                                style={{ color: "#a80757" }}
                              >
                                <span style={{ color: "black" }}>
                                  Выбранная услуга
                                </span>
                                <br></br>
                                {item.title}
                              </Container>
                            </Container>
                            <Modal
                              show={calendarShow}
                              onHide={handleCloseCalendar}
                              style={{
                                fontFamily: "Roboto Condensed, sans-serif",
                              }}
                            >
                              <Modal.Title
                                style={{ color: "black", margin: "10px auto" }}
                              >
                                Выберите дату
                              </Modal.Title>

                              <Modal.Body className="d-flex justify-content-center">
                                <div className="App">
                                  <Calendar
                                    onChange={onChangeCalendar}
                                    value={calendarValue}
                                    // tileClassName="highlight"

                                    tileDisabled={({ date, view }) =>
                                      view === "month" &&
                                      qw.some(
                                        (qw) =>
                                          date.getFullYear() ===
                                            qw.getFullYear() &&
                                          date.getFullYear() ===
                                            qw.getFullYear() &&
                                          date.getMonth() === qw.getMonth() &&
                                          date.getDate() === qw.getDate()
                                      )
                                    }
                                  />
                                </div>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  style={{
                                    border: "none",
                                    borderRadius: "2%",
                                    padding: "6px 18px",
                                  }}
                                  variant="secondary"
                                  onClick={handleCloseCalendar}
                                >
                                  Закрыть
                                </Button>
                                {(allDate ||
                                  calendarValue === Date.parse(new Date())) && (
                                  <Button
                                    className={styles.modal_btn}
                                    variant="primary"
                                    onClick={() => handleAddDate(item._id)}
                                  >
                                    Отправить
                                  </Button>
                                )}
                              </Modal.Footer>
                            </Modal>
                          </>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          style={{
                            border: "none",
                            borderRadius: "2%",
                            padding: "6px 18px",
                          }}
                          variant="secondary"
                          onClick={handleClose}
                        >
                          Закрыть
                        </Button>
                        <Button
                          className={styles.modal_btn}
                          variant="primary"
                          onClick={handleClose}
                        >
                          Отправить
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                </div>
              </div>
              <div className={styles.back_to_services}>
                <Link to="/services">
                  <HiOutlineArrowLeft className={styles.iconArrow} />В ОБЩИЙ
                  РАЗДЕЛ
                </Link>
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
              <hr
                style={{ width: "99%", border: "1px solid", marginTop: "5%" }}
              />
              <Reviews />
            </div>
          );
        }
      })}
    </div>
  );
}

export default ServiceInfo;

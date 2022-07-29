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
                          userId === item.user && item.service === id && (
                            <>
                              <div>Вы записаны на </div>
                              <div>{item.date}</div>
                              <button onClick={() => handleRemove(item._id)}>
                                Отменить запись
                              </button>
                            </>
                          )
                        );
                      })
                    ) : (
                      <Button variant="primary" onClick={handleShow}>
                        Записаться
                      </Button>
                    )}

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Container className="d-flex justify-content-between align-items-center">
                          <Modal.Title>Услуга</Modal.Title>

                          {user}
                        </Container>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Номер телефона</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="введите номер телефона"
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
                              variant="primary"
                              onClick={handleShowCalendar}
                            >
                              Выберите дату
                            </Button>
                            <Container
                              className="d-flex"
                              style={{ fontSize: "17px", marginTop: "3%" }}
                            >
                              <Container>
                                <Form.Label>Выбранная услуга</Form.Label>
                              </Container>
                              <Container style={{ color: "orange" }}>
                                {item.title}
                              </Container>
                            </Container>
                            <Modal
                              show={calendarShow}
                              onHide={handleCloseCalendar}
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Выберите дату</Modal.Title>
                              </Modal.Header>
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

                                          date.getFullYear() === qw.getFullYear() &&

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
                                  variant="secondary"
                                  onClick={handleCloseCalendar}
                                >
                                  Закрыть
                                </Button>
                                {(allDate ||
                                  calendarValue === Date.parse(new Date())) && (
                                  <Button
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
                        <Button variant="secondary" onClick={handleClose}>
                          Закрыть
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
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

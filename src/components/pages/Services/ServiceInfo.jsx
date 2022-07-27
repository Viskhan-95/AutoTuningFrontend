import React, { useState } from "react";
import styles from "./Services.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getServices } from "../../../features/services/servicesSlice";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";

function ServiceInfo() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [calendarShow, setCalendarShoww] = useState(false);
  const user = localStorage.getItem("user");
  const handleCloseCalendar = () => setCalendarShoww(false);
  const handleShowCalendar = () => setCalendarShoww(true);

  const { id } = useParams();
  const services = useSelector((state) => state.services.services);
  const dispatch = useDispatch();
  const [calendarValue, onChangeCalendar] = useState(new Date());

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
                    <Button variant="primary" onClick={handleShow}>
                      записаться на услугу
                    </Button>

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
                              autoFocus
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                          </Form.Group>
                          <>
                            <Button
                              variant="primary"
                              onClick={handleShowCalendar}
                            >
                              Выберите дату
                            </Button>
                            <Container className="d-flex" style={{fontSize:"17px", marginTop:"3%"}}>
                            <Container>
                            <Form.Label >Выбранная услуга</Form.Label>
                            </Container>
                            <Container style={{ color:"orange"}}>
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
                                <Button
                                  variant="primary"
                                  onClick={handleCloseCalendar}
                                >
                                  Отправить
                                </Button>
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
            </div>
          );
        }
      })}
    </div>
  );
}

export default ServiceInfo;

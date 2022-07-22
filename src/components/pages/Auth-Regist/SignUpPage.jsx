import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  errorNull,
  showModalSignUp,
} from "../../../features/users/usersSlice";
import { Form, Modal, Button, Spinner } from "react-bootstrap";

const SignUpPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const signUp = useSelector((state) => state.usersReducer.signUp);
  const showSignUp = useSelector((state) => state.usersReducer.showSignUp);
  const error = useSelector((state) => state.usersReducer.error);

  const handleChangeLogin = (e) => setLogin(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = () => {
    dispatch(addUser({ login, password }));
    setLogin("");
    setPassword("");
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const handleClose = () => {
    dispatch(showModalSignUp(false));
    dispatch(errorNull());
  };

  const colorTextError = error ? "red" : "black";

  return (
    <>
      <Modal
        show={showSignUp}
        onHide={handleClose}
        keyboard={true}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title className="mx-auto me-5">РЕГИСТРАЦИЯ</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicLogin">
              <Form.Label>
                Login{" "}
                <span style={{ color: colorTextError, fontSize: 14 }}>
                  {" "}
                  {error === "логин уже занят"
                    ? "(логин уже занят)"
                    : "(обязательное поле)"}
                </span>
              </Form.Label>
              <Form.Control
                type="login"
                placeholder="Enter login"
                onChange={handleChangeLogin}
                value={login}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Password{" "}
                <span style={{ color: colorTextError, fontSize: 14 }}>
                  {" "}
                  (больше 4 и меньше 10 символов){" "}
                </span>
              </Form.Label>
              <Form.Control
                type={showPassword ? "Text" : "Password"}
                placeholder="Password"
                onChange={handleChangePassword}
                value={password}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Show password"
                onChange={handleChecked}
              />
              <span style={{ color: colorTextError, fontSize: 16 }}>
                {error !== "логин уже занят" && error}{" "}
              </span>
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              className="mt-3"
              disabled={!login || password.length < 3}
              onClick={handleSubmit}
            >
              {signUp ? (
                <div>
                  <Spinner size={14} />
                </div>
              ) : (
                "Log Up"
              )}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignUpPage;

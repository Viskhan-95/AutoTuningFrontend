import React, { useState } from "react";
import { Form, Modal, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  auth,
  errorNull,
  showModalSignIn,
} from "../../../features/users/usersSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignInPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const signIn = useSelector((state) => state.usersReducer.signIn);
  const error = useSelector((state) => state.usersReducer.error);
  const showSignIn = useSelector((state) => state.usersReducer.showSignIn);

  const handleChangeLogin = (e) => setLogin(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = () => {
    dispatch(auth({ login, password }));
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

  const handleOpenEye = () => {
    setShowPassword(false);
  };
  const handleClouseEye = () => {
    setShowPassword(true);
  };

  const handleClose = () => {
    dispatch(showModalSignIn(false));
    dispatch(errorNull());
  };
  const colorTextError = error ? "red" : "white";

  return (
    <Modal
      show={showSignIn}
      onHide={handleClose}
      keyboard={true}
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title style={{ paddingLeft: "25%" }}>АВТОРИЗАЦИЯ</Modal.Title>
        <Button
          onClick={handleClose}
          style={{ color: "white", background: "black", border: "none", fontSize: "28px", }}
        >
          &times;
        </Button>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="login"
              onChange={handleChangeLogin}
              value={login}
            />
            <span style={{ color: colorTextError, fontSize: 14 }}>
              {" "}
              (обязательное поле){" "}
            </span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? "Text" : "Password"}
              onChange={handleChangePassword}
              value={password}
            />
            {showPassword ? (
              <div onClick={handleOpenEye}>
                <AiOutlineEye
                  onClick={handleChecked}
                  style={{
                    position: "absolute",
                    bottom: "100",
                    color: "black",
                    cursor: "pointer",
                    left: "445",
                    fontSize: "25px",
                  }}
                />
              </div>
            ) : (
              <div onClick={handleClouseEye}>
                <AiOutlineEyeInvisible
                  style={{
                    position: "absolute",
                    bottom: "100",
                    color: "black",
                    cursor: "pointer",
                    left: "445",
                    fontSize: "25px",
                  }}
                />
              </div>
            )}

            <span style={{ color: colorTextError, fontSize: 14 }}>
              {" "}
              (больше 4 и меньше 10 символов){" "}
            </span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <span style={{ color: "red", fontSize: 16 }}>
              {error && error}{" "}
            </span>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            disabled={!login || password.length < 4}
            onClick={(e) => handleSubmit(e)}
          >
            {signIn ? (
              <div>
                <Spinner size={14} />
              </div>
            ) : (
              "Log In"
            )}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignInPage;

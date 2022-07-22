import React, { useState } from 'react';
import { Form, Modal, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { auth, errorNull, showModalSignIn } from "../../../features/users/usersSlice";

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
      setLogin('');
      setPassword('');
   }

   const handleChecked = (e) => {
      if (e.target.checked) {
         setShowPassword(true);
      }
      else {
         setShowPassword(false);
      }
   }

   const handleClose = () => {
      dispatch(showModalSignIn(false));
      dispatch(errorNull());
   }

   const colorTextError = error ? "red" : "black";

   return (
      <Modal show={showSignIn} onHide={handleClose} keyboard={true} backdrop='static' >
         <Modal.Header closeButton>
            <Modal.Title className="mx-auto me-5">АВТОРИЗАЦИЯ</Modal.Title>
         </Modal.Header>

         <Modal.Body>
            <Form>
               <Form.Group className="mb-3" controlId="formBasicLogin">
                  <Form.Label>Login<span style={{ color: colorTextError, fontSize: 14 }}> (обязательное поле) </span></Form.Label>
                  <Form.Control type="login" placeholder="Enter login"
                     onChange={handleChangeLogin} value={login} />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password<span style={{ color: colorTextError, fontSize: 14 }}> (больше 4 и меньше 10 символов) </span></Form.Label>
                  <Form.Control type={showPassword ? "Text" : "Password"} placeholder="Password"
                     onChange={handleChangePassword} value={password} />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Show password"
                     onChange={handleChecked} />
                  <span style={{ color: "red", fontSize: 16 }}>{error && error} </span>
               </Form.Group>

               <Button variant="primary" type="submit" disabled={!login || password.length < 4}
                  onClick={(e) => handleSubmit(e)}>
                  {signIn ? <div><Spinner size={14} /></div> : "Log In"}
               </Button>
            </Form>
         </Modal.Body>
      </Modal>
   );
};

export default SignInPage;
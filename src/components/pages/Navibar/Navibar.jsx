import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import SignInPage from "../../pages/Auth-Regist/SignInPage";
import SignUpPage from "../../pages/Auth-Regist/SignUpPage";
import { clearToken, showModalSignIn, showModalSignUp } from "../../../features/users/usersSlice";
import { ImUserPlus, ImEnter } from 'react-icons/im';
import { GiExitDoor } from 'react-icons/gi';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../icon/iconAutoTuning.png"


const Navibar = () => {
    const token = useSelector((state) => state.usersReducer.token);

    const dispatch = useDispatch();

    const handleShowSignup = () => {
        dispatch(showModalSignUp(true));
    }

    const handleShowSignin = () => {
        dispatch(showModalSignIn(true));
    }

    const handleExit = () => {
        dispatch(clearToken());
    }

    const activePageStyle = {
        color: 'white',
        borderBottom: '3px solid',
        textDecoration: "none",
        marginRight: "20px",
    };

    const inActivePageStyle = {
        color: 'lightGray',
        textDecoration: "none",
        marginRight: "20px",
    };
    return (
        <Container fluid className="d-flex">
            <Container style={{ width: "10%" }}>
                <img className="ms-3"
                    src={logo}
                    width="80"
                    alt="logotip"
                />
            </Container>

            <Navbar collapseOnSelect expand="md" style={{ width: "90%" }}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto mx-4" style={{ fontSize: 18 }}>
                        <div >
                            <NavLink style={({ isActive }) => (isActive ? activePageStyle : inActivePageStyle)}
                                to="/"> ГЛАВНАЯ
                            </NavLink>

                            <NavLink style={({ isActive }) => (isActive ? activePageStyle : inActivePageStyle)}
                                to="/about"> О НАС
                            </NavLink>

                            <NavLink style={({ isActive }) => (isActive ? activePageStyle : inActivePageStyle)}
                                to="/services"> УСЛУГИ
                            </NavLink>

                            <NavLink style={({ isActive }) => (isActive ? activePageStyle : inActivePageStyle)}
                                to="/portfolio"> ПОРТФОЛИО
                            </NavLink>

                            <NavLink style={({ isActive }) => (isActive ? activePageStyle : inActivePageStyle)}
                                to="/contacts"> КОНТАКТЫ
                            </NavLink>
                        </div>
                    </Nav>
                    {token ?
                        <Nav>
                            <Button variant="primary" onClick={handleExit}
                                className="mx-1">
                                {<GiExitDoor size={30} />}
                            </Button>
                        </Nav>
                        :
                        <Nav>
                            <Button variant="primary" onClick={handleShowSignin}
                                className="mx-1">
                                {<ImEnter size={30} />}
                            </Button>
                            <Button variant="primary" onClick={handleShowSignup}
                                className="mx-1">
                                {<ImUserPlus size={30} />}
                            </Button>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
            
            <SignInPage/>
            <SignUpPage/>
        </Container>
    )
};
export default Navibar;
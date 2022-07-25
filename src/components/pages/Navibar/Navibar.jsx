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
import { Link } from "react-router-dom";


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
        color: 'blue',
        textDecoration: "none",
        marginRight: "20px",
        fontWeight: "500",
    };

    const inActivePageStyle = {
        color: "white",
        textDecoration: "none",
        marginRight: "20px",
    };
    return (
        <Container fluid className="header d-flex align-items-baseline " >
            <div className="header_logo" style={{
                padding: "20px",
            }}>
                <Link to="/">
                    <img src={logo} alt="logotip" />
                </Link>
            </div >

            <Navbar collapseOnSelect expand="md" style={{ width: "100%", }}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Container >
                        <Nav style={{ fontSize: 20 }}>
                            <div style={{margin: "auto"}}>
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
                    </Container>

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
            <SignInPage />
            <SignUpPage />
        </Container>

    )
};
export default Navibar;
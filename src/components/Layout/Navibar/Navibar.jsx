import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import SignInPage from "../../pages/Auth-Regist/SignInPage";
import SignUpPage from "../../pages/Auth-Regist/SignUpPage";
import {
  clearToken,
  showModalSignIn,
  showModalSignUp,
} from "../../../features/users/usersSlice";
import { ImUserPlus, ImEnter } from "react-icons/im";
import { GiExitDoor } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../icon/iconAutoTuning.png";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import backgroundImage from "../../../icon/newBackgroundImg.jpg"
import backgroundImage from "../../../icon/newBackgroundImg.jpg";
import { AiOutlineTool } from "react-icons/ai";
import { GoTools } from "react-icons/go";

const Navibar = (heightHeader) => {
  const token = useSelector((state) => state.usersReducer.token);

  const dispatch = useDispatch();

  const handleShowSignup = () => {
    dispatch(showModalSignUp(true));
  };

  const handleShowSignin = () => {
    dispatch(showModalSignIn(true));
  };

  const handleExit = () => {
    dispatch(clearToken());
  };

  const activePageStyle = {
    color: "#a80757",
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
    <Container
      fluid
      className="header d-flex align-items-baseline p-4"
      style={{
        backgroundImage: `url(${backgroundImage}`,
        height: `${heightHeader}vh`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        className="header_logo"
        style={{ height: "100px", marginLeft: "60px" }}
      >
        <Link
          to="/"
          style={{
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            color: "white",
            gap: "8px"
          }}
        >
          <div>
            <GoTools style={{ fontSize: "42", color: "#a80757" }} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            BROOKLYN<br></br>STUDIO
          </div>
        </Link>
      </div>

      <Navbar collapseOnSelect expand="md" style={{ width: "80%" }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container>
            <Nav style={{ fontSize: 20 }}>
              <div style={{ margin: "auto" }}>
                <NavLink
                  style={({ isActive }) =>
                    isActive ? activePageStyle : inActivePageStyle
                  }
                  to="/"
                >
                  {" "}
                  ГЛАВНАЯ
                </NavLink>

                <NavLink
                  style={({ isActive }) =>
                    isActive ? activePageStyle : inActivePageStyle
                  }
                  to="/about"
                >
                  {" "}
                  О НАС
                </NavLink>

                <NavLink
                  style={({ isActive }) =>
                    isActive ? activePageStyle : inActivePageStyle
                  }
                  to="/services"
                >
                  {" "}
                  УСЛУГИ
                </NavLink>

                <NavLink
                  style={({ isActive }) =>
                    isActive ? activePageStyle : inActivePageStyle
                  }
                  to="/contacts"
                >
                  {" "}
                  КОНТАКТЫ
                </NavLink>
              </div>
            </Nav>
          </Container>


          {token ? (
            <Nav>
            <Link to = "/admin">
                     <Button variant="link" 
                        className="mx-1">
                        {<BiUser size={40} color={"#a80757"}/>}
                     </Button>
                     </Link>
              <Button variant="link" onClick={handleExit} className="mx-1">
                {<GiExitDoor size={40} color={"#a80757"} />}
              </Button>
            </Nav>
          ) : (
            <Nav>
              <Button
                variant="link"
                onClick={handleShowSignin}
                className="mx-1"
              >
                {<ImEnter size={30} color={"#a80757"} />}
              </Button>
              <Button
                variant="link"
                onClick={handleShowSignup}
                className="mx-1"
              >
                {<ImUserPlus size={30} color={"#a80757"} />}
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      <SignInPage />
      <SignUpPage />
    </Container>
  );
};
export default Navibar;

import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";
import Slider from "../slider/Slider";
import styles from "./header.module.css";

const Header = (props) => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header>
      <Navbar
        variant="dark"
        expand="lg"
        collapseOnSelect
        className={styles.header}
      >
        <Container className={styles.container}>
          <LinkContainer to="/">
            <Navbar.Brand>Verdant</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/articles">
            <a className={styles.links}>Articles</a>
          </LinkContainer>
          <LinkContainer to="/blog">
            <a className={styles.links}>Blog</a>
          </LinkContainer>
          <LinkContainer to="/contact">
            <a className={styles.links}>Contact</a>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div onChange={props.toggleTheme}>
              <Slider />
            </div>
            <Nav className="ms-auto">
              {userInfo ? (
                <>
                  <LinkContainer to="/write">
                    <Nav.Link>Write Article</Nav.Link>
                  </LinkContainer>

                  <NavDropdown title={userInfo.name} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <FaSignInAlt /> Sign In
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>
                      <FaSignOutAlt /> Sign Up
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

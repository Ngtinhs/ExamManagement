import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {

  const isAuthencicated = useSelector(state => state.user.isAuthencicated)
  const account = useSelector(state => state.user.account)


  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/" className="navbar-brand">
          NGTINHS
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/Users" className="nav-link">
              Users
            </NavLink>
            <NavLink to="/Admin" className="nav-link">
              Admin
            </NavLink>
          </Nav>
          <Nav>
            {isAuthencicated === false ?
              <>
                <button className="btn-login" onClick={() => handleLogin()}>
                  Login
                </button>
                <button className="btn-signup">Signup</button>
              </> :

              <NavDropdown title="Setting" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  Logout
                </NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

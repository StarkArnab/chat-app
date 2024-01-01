import { Link } from "react-router-dom";
import { Container, Nav, Stack, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" className="mb-4" style={{ height: "3.75rem" }}>
        <Container>
          <Link to={"/"} className="link-light text-decoration-none">
            <h2>Chat App</h2>
          </Link>
          <span className="text-warning">Logged in as Arnab</span>
          <Nav>
            <Stack direction="horizontal" gap={3}>
              <Link to={"/login"} className="link-light text-decoration-none">
                Login
              </Link>
              <Link
                to={"/register"}
                className="link-light text-decoration-none"
              >
                Register
              </Link>
            </Stack>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

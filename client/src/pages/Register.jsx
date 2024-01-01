import { Alert, Button, Col, Form, Row, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <>
      <Form
        onSubmit={(e) => {
          registerUser();
          e.preventDefault();
        }}
      >
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Register</h2>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => {
                  updateRegisterInfo({ ...registerInfo, name: e.target.value });
                }}
                required
              />
              <Form.Control
                type="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  updateRegisterInfo({
                    ...registerInfo,
                    email: e.target.value,
                  });
                }}
                required
              />
              <Form.Control
                type="password"
                placeholder="Enter your password"
                onChange={(e) => {
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  });
                }}
                required
              />
              <Button variant="primary" type="submit">
                Register
              </Button>
              {registerError ? <></> : null}
              <Alert variant="danger">
                <p>An error occured</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;

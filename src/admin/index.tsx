import { useState } from "react";
import { Container, Col } from "react-bootstrap";
import { Auth } from "./auth";
import { Content } from "./content";

const Admin = () => {
  const [isAuthenticated, setAuthentificated] = useState(false);

  return (
    <Container style={{ marginTop: "2em" }}>
      <Col sm={12}>{isAuthenticated ? <Content /> : <Auth set={setAuthentificated} />}</Col>
    </Container>
  );
};

export { Admin };

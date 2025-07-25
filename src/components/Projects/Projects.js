import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          No projects to display at the moment. Stay tuned!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Removed project cards */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

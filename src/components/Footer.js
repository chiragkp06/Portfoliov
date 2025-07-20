import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../Assets/logo.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <img src={logo} alt="CKP Logo" style={{ height: "24px", width: "auto", marginRight: "10px" }} />
            <h3 style={{ margin: "0" }}>Copyright © {year} CKP </h3>
          </div>
        </Col>
        <Col md="6" className="footer-body">
          <ul className="footer-icons" style={{ display: "flex", justifyContent: "flex-end", listStyle: "none", margin: "0", padding: "0" }}>
            <li className="social-icons" style={{ margin: "0 10px" }}>
              <a
                href="https://github.com/chiragkp06"
                style={{ color: "white"}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons" style={{ margin: "0 10px" }}>
              <a
                href="https://www.linkedin.com/in/chirag-kp/"
                style={{ color: "white"}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

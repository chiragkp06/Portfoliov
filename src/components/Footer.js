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
      <Row className="align-items-center text-center text-md-start">
        <Col md="6" className="footer-copywright">
         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "flex-start" }}>
            <img src={logo} alt="CKP Logo" style={{ height: "28px", width: "auto", marginRight: "10px" }} />
          </div>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} CKP</h3>
        </Col>

        <Col md="6" className="footer-body">
         <ul className="footer-icons" style={{ display: "flex", justifyContent: "flex-end", gap: "20px", paddingLeft: 0, marginBottom: 0 }}>
            <li className="social-icons" style={{ listStyle: "none", fontSize: "1.2rem" }}>
              <a
                href="https://github.com/chiragkp06"
                style={{ color: "white"}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons" style={{ listStyle: "none", fontSize: "1.2rem" }}>
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

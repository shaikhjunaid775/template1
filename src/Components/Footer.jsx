import React from "react";
import Placeholder from "react-bootstrap/Placeholder";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Footer(props) {
  return (
    <>
      <footer  className="text-center text-lg-left">
        <Container className="p-4">
          <Row>
            <Col lg={6} md={12} className="mb-4 mb-md-0">
                
            <Placeholder animation="glow">
            <Placeholder xs={12} />
                <Placeholder xs={7} size="sm" /> <Placeholder xs={4} size="sm" />{" "}
                <Placeholder xs={4}  size="sm" /> <Placeholder xs={6} size="sm" />{" "}
                <Placeholder xs={8}  size="sm" />
              </Placeholder>
            </Col>

            <Col lg={6} md={12} className="mb-4 mb-md-0">
               <Placeholder animation="glow">
            <Placeholder xs={12} />
                <Placeholder xs={7} size="sm" /> <Placeholder xs={4} size="sm" />{" "}
                <Placeholder xs={4}  size="sm" /> <Placeholder xs={6} size="sm" />{" "}
                <Placeholder xs={8}  size="sm" />
              </Placeholder>
            </Col>
          </Row>
        </Container>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy;{new Date().getFullYear()} Copyright:{" "}
          <a className="text-dark" href="#">
            Template
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;

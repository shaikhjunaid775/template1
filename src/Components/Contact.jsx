import React from "react";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Contact(props) {
  return (
    <>
      <Row className="my-lg-5">
        <Col lg={6}>

          <article className="format lg:format-lg ">
        {props.loading ? <Skeleton  height={50} /> :  <h1>Contact Us</h1>}
        {props.loading ? (
            <>
              <Skeleton count={2} />
              <Skeleton width={150} />
              </>

            ) : (
              <p className="lead">
                Flowbite is an open-source library of UI components built with
                the utility-first classes from Tailwind CSS. It also includes
                interactive elements such as dropdowns, modals, datepickers.
              </p>
            )}
          </article>
        </Col>
        <Col lg={6}>
        {props.loading ? (
            <Skeleton height={220} />
          ) : (
            <Image
              src="https://source.unsplash.com/650x300/?software"
              thumbnail
            />
          )}
        </Col>
      </Row>
    
    </>
  );
}

export default Contact;

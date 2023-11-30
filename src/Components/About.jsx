import React from "react";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

function about(props) {
  return (
    <>
      <Row className="my-lg-5">
        <Col lg={6}>
          <article className="format lg:format-lg ">
            {props.loading ? <Skeleton height={50} /> : <h1>About Us</h1>}
            {props.loading ? (
              <Skeleton count={3} />
            ) : (
              <p className="lead">
                Flowbite is an open-source library of UI components built with
                the utility-first classes from Tailwind CSS. It also includes
                interactive elements such as dropdowns, modals, datepickers.
              </p>
            )}

            {props.loading ? (
              <Skeleton count={2} />
            ) : (
              <p>
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </p>
            )}

            {props.loading ? (
              <Skeleton count={2} />
            ) : (
              <p>
                But then I found a{" "}
                <a href="#">
                  component library based on Tailwind CSS called Flowbite
                </a>
                . It comes with the most commonly used UI components, such as
                buttons, navigation bars, cards, form elements, and more which
                are conveniently built with the utility classes from Tailwind
                CSS.
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
      <Row>
        <Col lg={4} className="">
          <div className="text-center">
          {props.loading ? <Skeleton  height={50}/> : <h1>Vision</h1>}

            
          </div>
          <Card>
            {props.loading ? (
              <Skeleton className="card-img-top" height={220} />
            ) : (
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/650x300/?vision"
              />
            )}
            <Card.Body>
            {props.loading ? <Skeleton className="card-title" /> : <Card.Title>Card Title</Card.Title>}
            {props.loading ? <Skeleton className="card-text" count={2} /> :  <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>}
            
            {props.loading ? <Skeleton className="btn btn-primary" type="button" width={150} /> : <Button variant="primary">Go somewhere</Button>}
             
              
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="">
          <div className="text-center">
          {props.loading ? <Skeleton  height={50}/> : <h1>Mission</h1>}

            
          </div>
          <Card>
            {props.loading ? (
              <Skeleton className="card-img-top" height={220} />
            ) : (
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/650x300/?mission"
              />
            )}
            <Card.Body>
            {props.loading ? <Skeleton className="card-title" /> : <Card.Title>Card Title</Card.Title>}
            {props.loading ? <Skeleton className="card-text" count={2} /> :  <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>}
            
            {props.loading ? <Skeleton className="btn btn-primary" type="button" width={150} /> : <Button variant="primary">Go somewhere</Button>}
             
              
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="">
          <div className="text-center">
          {props.loading ? <Skeleton  height={50} /> : <h1>Our Service</h1>}

            
          </div>
          <Card>
            {props.loading ? (
              <Skeleton className="card-img-top" height={220} />
            ) : (
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/650x300/?Service"
              />
            )}
            <Card.Body>
            {props.loading ? <Skeleton className="card-title" /> : <Card.Title>Card Title</Card.Title>}
            {props.loading ? <Skeleton className="card-text" count={2} /> :  <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>}
            
            {props.loading ? <Skeleton className="btn btn-primary" type="button" width={150} /> : <Button variant="primary">Go somewhere</Button>}
             
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default about;

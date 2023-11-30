import React from "react";

import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Services(props) {
  return (
    <>
      <Row className="my-lg-5">
        <article className="format lg:format-lg ">
        {props.loading ? <Skeleton  height={50} /> : <h1>Our Service</h1>}
        </article>
      </Row>
      <Row>
      <Col lg={3} className="">
          
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
            
            {props.loading ? <Skeleton className="btn bg-primmary btn-primary" type="button" width={150} /> : <Button variant="primary">Go somewhere</Button>}
             
              
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} className="">
          <div className="text-center">
          

            
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
        <Col lg={3} className="">
          <div className="text-center">
          

            
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
            
            {props.loading ? <Skeleton className="btn btn-primary" baseColor="--bs-btn-bg"  width={150} /> : <Button variant="primary">Go somewhere</Button>}
             
              
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} className="">
          <div className="text-center">
          

            
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

export default Services;

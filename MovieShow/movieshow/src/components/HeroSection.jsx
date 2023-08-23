import React from "react";
import { Row, Col } from "react-bootstrap";
const HeroSection = () => {
  return (
    <>
      <section id="herosection">
        <Row>
          <Col>
            <div id="poster">
              <h2>Welcome</h2>
              <h3>Millions of movies and people to discover. Explore now.</h3>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default HeroSection;

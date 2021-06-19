import React from "react";
import styled from "styled-components";
import Raisebox from "../components/raisebox/raisebox";
import "./style.css";
import { Container, Row, Col } from "react-grid-system";

export const Buttons = styled.div`
  margin-left:35vw;
  margin-right:-10vw;
  margin-bottom:2%;
  @media only screen and (min-width: 381px) and (max-width: 1200px) {
    margin: 0 auto;
  }
  @media only screen and (max-width: 380px) {
    margin: 0 auto;
    overflow: hidden;
  }
`;

export const Button1 = styled.button`
  height: 46px;
  width: 315px;
  border-radius: 5px;
  border: none;
  cursor:pointer;
  background-color: black;
  @media only screen and (min-width: 708px) {
    margin-left: 10px;
  }
`;

export const Button2 = styled.div`
  cursor:pointer;
`;

export const Discord = styled.img`
  height: 43px;
  width: 140px;
`;

function Home() {
  return (
    <>
      <Raisebox style={{ minHeight: "20vh", marginTop: "5vh" }}>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} xl={6}>
              <img
                className="map"
                src={require("../assets/images/Map1.png").default}
                alt="Hackodisha Map of Odisha"
              />
            </Col>
            <Col sm={12} md={6} lg={6} xl={6}>
              <h1 className="home_h1">
                Give life to your innovative ideas that can be solutions to the
                problems of today with{" "}
                <span className="home_h1_span">HACKODISHA!</span>
              </h1>
              <img
                className="date"
                src={require("../assets/images/date.png").default}
                alt="Hackodisha Date"
              />
            </Col>
            
          </Row>

        </Container>
          <Buttons>
            <Button2
              id="devfolio-apply-now"
              className="apply-button"
              data-hackathon-slug="hackodisha"
              data-button-theme="light"
            ></Button2>
            
              <Button1>
              <a
              href="https://discord.gg/VWrQxSg9nR"
              target="_blank"
              rel="noopener noreferrer"
            >
                <Discord
                  src={require("../assets/images/discord.png").default}
                  alt="DISCORD"
                />
                </a>
              </Button1>
            
          </Buttons>
      </Raisebox>
    </>
  );
}

export default Home;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of My <strong className="purple">Project Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SociLink"
              description="A social media application aimed at connecting people and fostering meaningful interactions in a secure and user-friendly environment. The project provides a platform where users can create profiles, connect with friends, share updates, and engage in various social activities."
              ghLink="https://github.com/C-V-Anish/SociLink"
              demoLink="https://www.google.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TriviaQuest API"
              description="A timed Quiz API that enables users to create and participate in quizzes with ease. Features include Quiz Creation, Timed Quizzes, Integration Capabilities."
              ghLink="https://github.com/C-V-Anish/TriviaQuest"
              demoLink="https://triviaquest-production.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Crown Clothing"
              description="A React-based online E-Commerce clothing website offers a range of features and functionalities to provide a seamless shopping experience for users. Features include User-Friendly Interface, Shopping Cart and Wishlist, User Authentication and Profiles, Payment Integration etc."
              ghLink="https://github.com/C-V-Anish/crwn-clothing"
              demoLink="https://sparkly-meringue-563538.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

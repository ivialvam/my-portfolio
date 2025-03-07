import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
// import projImg5 from "../assets/img/project-img5.png";
// import projImg6 from "../assets/img/project-img6.png";
import canvaImg from "../assets/img/canva.png";
import photoshopImg from "../assets/img/adobe-photoshop.png";


export const Projects = () => {
  const graphicProjects = [
    {
      title: "Healthy Food Business",
      description: "Branding & Marketing Design",
      imgUrl: projImg1,
    },
    {
      title: "Robotics Event",
      description: "Branding & Promotional Design",
      imgUrl: projImg2,
    },
    {
      title: "Volunteer Gathering",
      description: "Visual Design",
      imgUrl: projImg3,
    },
  ]

  const programmingArticles = [
    {
      title: "Membangun REST API dengan Node.js dan Express",
      content: "Dalam artikel ini, kita akan membahas cara membuat REST API menggunakan Node.js dan Express dengan database MongoDB...",
      date: "31 Januari 2025",
      imgUrl: projImg4,
    },
    // {
    //   title: "Memahami State Management di React",
    //   content: "State management sangat penting dalam pengembangan aplikasi React. Kita akan membahas Redux, Context API, dan solusi lainnya...",
    //   date: "25 Januari 2025",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Optimasi Kinerja Website dengan Lazy Loading",
    //   content: "Lazy loading adalah teknik yang digunakan untuk meningkatkan performa website dengan cara menunda pemuatan gambar atau data...",
    //   date: "20 Januari 2025",
    //   imgUrl: projImg2,
    // },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Graphic Designer</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Programmer</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Web Developer</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {/* Tab 1: Graphic Designer */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {graphicProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                        <p>Tools:</p>
                        <div className="tools-container">
                          <img src={canvaImg} alt="Canva" className="tool-img" />
                          <img src={photoshopImg} alt="Photoshop" className="tool-img" />
                        </div>
                      </Tab.Pane>

                      {/* Tab 2: Programmer - Sekarang dengan gambar */}
                      <Tab.Pane eventKey="second">
                        <div className="blog-section">
                          {programmingArticles.map((article, index) => (
                            <div key={index} className="blog-post mb-4 p-3 border rounded shadow-sm">
                              <img src={article.imgUrl} alt={article.title} className="blog-image" />
                              <h4 className="mt-3 mb-1">{article.title}</h4>
                              <small className="text-muted">{article.date}</small>
                              <p className="mt-2">{article.content}</p>
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>

                      {/* Tab 3: Web Developer */}
                      <Tab.Pane eventKey="third">
                        <p>Tambahkan daftar proyek Web Developer di sini.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}

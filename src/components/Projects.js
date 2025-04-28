import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import graphicsdesignerproject1 from "../assets/img/project-img1.png";
import graphicsdesignerproject2 from "../assets/img/project-img2.png";
import graphicsdesignerproject3 from "../assets/img/project-img3.png";
import qualityassuranceproject1 from "../assets/img/project-img4.png";
import qualityassuranceproject2 from "../assets/img/project-img6.png";
import programmerproject1 from "../assets/img/project-img5.png";

import canvaImg from "../assets/img/canva.png";
import photoshopImg from "../assets/img/adobe-photoshop.png";


export const Projects = () => {
  const graphicdesignerProjects = [
    {
      title: "Healthy Food Business",
      description: "Branding & Marketing Design",
      imgUrl: graphicsdesignerproject1,
    },
    {
      title: "Robotics Event",
      description: "Branding & Promotional Design",
      imgUrl: graphicsdesignerproject2,
    },
    {
      title: "Volunteer Gathering",
      description: "Visual Design",
      imgUrl: graphicsdesignerproject3,
    },
  ]

  const programmerProjects = [
    {
      imgUrl: programmerproject1,
      title: "CBR Extractor",
      date: "2024",
      company: "PT Asta Protek Jiarsi",
      content: `
      Saya membantu mengembangkan aplikasi CBR Extractor yang berfungsi untuk mengkonversi data dari Data Warehouse (DWH) ke dalam format 
      yang siap diproses dan digunakan oleh aplikasi internal kami. Aplikasi ini mengadopsi sistem ELT (Extract, Load, Transform), 
      memungkinkan proses pengambilan dan pemuatan data yang lebih efisien.
      <ul>
      <br> Jobdesk:
      <li> Membuat CRUD operations untuk aplikasi Extractor. </li>
      <li> Mengimplementasikan sistem ELT untuk memproses data dari DWH. </li>
      <li> Mengoptimalkan alur kerja data. </li>
      </ul>
      `,
      tools: "Laravel, PHP, PostgreSQL, JavaScript",
    },
  ];

  const qualityassuranceProjects = [
    {
      imgUrl: qualityassuranceproject1,
      title: "CBR Automation",
      date: "31 Januari 2025",
      company: "PT Asta Protek Jiarsi",
      content:`
      Saya membuat dan mengimplementasikan project automation testing menggunakan Cypress dengan bahasa pemrograman JavaScript.
      Project ini bertujuan untuk meningkatkan efisiensi pengujian dengan mengotomatiskan skenario pengujian utama, 
      mengurangi kesalahan manual, serta efisiensi waktu pengujian.
      `,
      tools: "Cypress, JavaScript, Excel",
    },
    
    {
      imgUrl: qualityassuranceproject2,
      title: "Regulatory Reporting",
      date: "2025",
      company: "PT Asta Protek Jiarsi",
      content: `
      Sebagai QA di tim CBR (Central Bank Reporting), saya terlibat dalam pengujian end-to-end terhadap sistem pelaporan ke 
      regulator seperti Bank Indonesia dan OJK. Beberapa laporan yang saya uji mencakup:
      <ul>
      <br><li><b>Antasena</b> (metadata validation, format compliance)</li>
          <li><b>Slik, Obox, Apolo, LPS, LLD</b> (validasi tampilan, backend data, dan log pelaporan)</li>
          <li>Familiar dengan metadata structure pada pelaporan Antasena BI dan Slik OJK</li>
      </ul>`,
      tools: "Cypress, JavaScript, Excel, DatGrip",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>My List Project</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Graphic Designer</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Programmer</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">QA Engineer</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {/* Tab 1: Graphic Designer */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {graphicdesignerProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                        <p>Tools:</p>
                        <div className="tools-container">
                          <img src={canvaImg} alt="Canva" className="tool-img" />
                          <img src={photoshopImg} alt="Photoshop" className="tool-img" />
                        </div>
                      </Tab.Pane>

                      {/* Tab 2: Programmer */}
                      <Tab.Pane eventKey="second">
                        <div className="blog-section">
                          {programmerProjects.map((project, index) => (
                            <div key={index} className="blog-post mb-4 p-3 border rounded shadow-sm">
                              <img src={project.imgUrl} alt={project.title} className="blog-image" />
                              <h5 className="mt-3 mb-1" style={{ color: "black" }}>{project.title}</h5>
                              <h3 className="mt-3 mb-1" style={{ color: "black" }}>{project.company}</h3>
                              <br></br>
                              <small className="text-muted">{project.date}</small>
                              <div style={{ color: "black", textAlign: "justify", width: "100%", margin: "auto", padding: "0 50px" }} dangerouslySetInnerHTML={{ __html: project.content }} ></div>
                              <p style={{ fontWeight: "bold" }}>Tools: {project.tools}</p>
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                          
                      {/* Tab 3: Quality Assurance */}
                      <Tab.Pane eventKey="third">
                        <div className="blog-section">
                          {qualityassuranceProjects.map((project, index) => (
                            <div key={index} className="blog-post mb-4 p-3 border rounded shadow-sm">
                              <img src={project.imgUrl} alt={project.title} className="blog-image" />
                              <h5 className="mt-3 mb-1" style={{ color: "black" }}>{project.title}</h5>
                              <h8 className="mt-3 mb-1" style={{ color: "black" }}>{project.company}</h8>
                              <br></br>
                              <small className="text-muted">{project.date}</small>
                              <div style={{ color: "black", textAlign: "justify", width: "100%", margin: "auto", padding: "0 50px" }} dangerouslySetInnerHTML={{ __html: project.content }} ></div>
                              <p style={{ fontWeight: "bold" }}>Tools: {project.tools}</p>
                            </div>
                          ))}
                        </div>
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

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import NavbarPage from "../../Components/Navbar/Navbar";
import ImageFilm from "../../Assets/ImgFilm/22OPPR.jpg";
import style from "./Book.module.css";
function Book(props) {
  const navigate = useNavigate();
  const handleSchedule = () => {
    // console.log("hehe");
    navigate("/schedule");
  };
  return (
    <Container fluid>
      <NavbarPage />
      <h4>OPPENHEIMER</h4>
      <h5>Biography, Drama, History</h5>
      <hr />
      <Row>
        <Col>
          <Image src={ImageFilm} thumbnail />
        </Col>
        <Col>
          <div>
            {" "}
            <i class="bi bi-clock"></i> 180 Minutes{" "}
          </div>
          <div className="mt-3">
            <Button onClick={handleSchedule}> Buy Ticket</Button>
          </div>
          <div className="mt-3">
            <Button> Trailer</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          Kisah tentang seorang fisikawan Amerika Serikat bernama J. Robert
          Oppenheimer yang mengembangkan bom atom.
          <div>
            <h4>Producer</h4>
          </div>
          <div>Christopher Nolan, Charles Roven, Emma Thomas</div>
          <div>
            <h4>Director</h4>
          </div>
          <div>Christopher Nolan</div>
          <div>
            <h4>Writer</h4>
          </div>
          <div>Christopher Nolan</div>
          <div>
            <h4>Writer</h4>
          </div>
          <div>
            Cillian Murphy, Robert Downey Jr., Josh Hartnett, Florence Pugh,
            Emily Blunt, Matt Damon, Olivia Thirlby, Jack Quaid, Gary Oldman,
            Kenneth Branagh, Rami Malek, Gustaf Skarsgard
          </div>
          <div>
            <h4>Distributor</h4>
          </div>
          <div>Universal Pictures</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Book;

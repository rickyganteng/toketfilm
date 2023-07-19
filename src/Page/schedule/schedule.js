import React, {useState, useEffect} from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import NavbarPage from "../../Components/Navbar/Navbar";
import ImageFilm from "../../Assets/ImgFilm/22OPPR.jpg";
import CardBioskop from "../../Components/CardBioskop/CardBioskop";
import style from "./schedule.module.css";

function Schedule() {
  const [title, setTitle] = useState("Pilih Salah Satu");

  const handleSelectLocation = (event) => {
    console.log("event", event);
    setTitle(event);
  };
  return (
    <>
      <Container fluid>
        <NavbarPage />
        <div className="d-flex justify-content-evenly">
          <Row>
            <Col md={5}>
              <Image src={ImageFilm} thumbnail />
            </Col>
            <Col>
              <h4>OPPENHEIMER</h4>
              <h5>Biography, Drama, History</h5>
              <div>
                {" "}
                <i class="bi bi-clock"></i> 180 Minutes{" "}
              </div>
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-evenly mt-5 mb-5">
          <Row>
            <Col>
              <DropdownButton
                onSelect={handleSelectLocation}
                id="dropdown-basic-button"
                title={title}
              >
                <Dropdown.Item href="#/action-1" eventKey="Semarang">
                  Semarang
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" eventKey="Jakarta">
                  Jakarta
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" eventKey="Surabaya">
                  Surabaya
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
        </div>
        {title != "Pilih Salah Satu" ? (
          <div>
            <CardBioskop />
          </div>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}

export default Schedule;

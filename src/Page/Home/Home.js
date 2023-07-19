import React, {Component} from "react";
import {Container} from "react-bootstrap";

import style from "./Home.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/CardImgFilm/CardImgFilm";
class Home extends Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <Container className={`${style.Container}`} fluid>
          <Navbar />
          <div className="mt-5">
            <Card />
          </div>
        </Container>
      </>
    );
  }
}
export default Home;

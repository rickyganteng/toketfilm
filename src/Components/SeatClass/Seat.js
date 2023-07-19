import React, {Component} from "react";
import styles from "./Seat.module.css";
import {Row, Col} from "react-bootstrap";

class Seat extends Component {
  constructor() {
    super(); // props dipanggil dalam cunstructor jika diperlukan (jika ada state yang memerlukan props)
    this.state = {
      seatA: [1, 2, 3, 4, 5, 6, 7],
    };
  }

  componentDidMount() {
    this.setAlphabetSeat();
  }

  setAlphabetSeat = () => {
    const {seatAlphabet} = this.props;
    const seatA = this.state.seatA.map((item) => `${seatAlphabet}${item}`);
    this.setState({
      seatA: seatA,
    });
  };

  render() {
    const {seatAlphabet, selected, reserved, bookingSeat} = this.props;
    return (
      <>
        <Row className={styles.rowSeat}>
          <Col className={styles.colSeat}>
            <div className={styles.label}>{`${seatAlphabet} `}</div>
          </Col>
          {this.state.seatA.map((item, index) => {
            return (
              <Col className={styles.colSeat} key={index}>
                <div
                  onClick={() => bookingSeat(item)}
                  className={`${styles.seat} ${
                    reserved.indexOf(item) > -1
                      ? styles.seatSold
                      : selected.indexOf(item) > -1
                      ? styles.seatSelected
                      : styles.seatAvailabel
                  }`}
                ></div>
              </Col>
            );
          })}
          {/* PEMBATAS */}
        </Row>
      </>
    );
  }
}

export default Seat;

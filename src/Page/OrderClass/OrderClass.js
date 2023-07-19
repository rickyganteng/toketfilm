import React, {Component} from "react";
import {Link} from "react-router-dom";
import NavBar from "../../Components/Navbar/Navbar";
import Seat from "../../Components/SeatClass/Seat";
import {Button, Image, Container, Row, Col, Card, Modal} from "react-bootstrap";
import styles from "./OrderClass.module.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movieName: "",
      premiereName: "",
      premiereImage: "",
      showTimeDate: "",
      showTimeClock: "",
      premierePrice: 0,
      selectedSeat: [],
      reservedSeat: [],
      setSeatAlphabet: ["A", "B", "C", "D", "E", "F", "G"],
      setSeatNumberA: ["1", "2", "3", "4", "5", "6", "7"],
      setSeatNumberB: ["8", "9", "10", "11", "12", "13", "14"],
      show: false,
    };
  }

  componentDidMount() {}

  bookingSeat = (seat) => {
    let tmpSelectedSeat = this.state.selectedSeat;
    const index = tmpSelectedSeat.indexOf(seat);
    if (this.state.reservedSeat.indexOf(seat) < 0) {
      if (index < 0) {
        this.setState({
          selectedSeat: [...this.state.selectedSeat, seat],
        });
      } else {
        tmpSelectedSeat.splice(index, 1);
        this.setState({
          selectedSeat: tmpSelectedSeat,
        });
      }
    } else {
    }
  };

  handleCheckOut = () => {
    const {
      userIDD,
      selectedSeat,
      movieName,
      premiereName,
      premiereImage,
      showTimeDate,
      showTimeClock,
      premierePrice,
    } = this.state;
    if (selectedSeat.length > 0) {
      const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));
      const newBookingInfo = JSON.stringify({
        ...bookingInfo,
        userIDD: userIDD,
        selectedSeat: selectedSeat,
        movieName: movieName,
        premiereName: premiereName,
        premiereImage: premiereImage,
        showTimeDate: showTimeDate,
        showTimeClock: showTimeClock,
        premierePrice: premierePrice,
      });
      localStorage.setItem("bookingInfo", newBookingInfo);
      this.props.history.push(`/main/payment`);
    } else {
      this.setState({
        show: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const {
      reservedSeat,
      selectedSeat,
      setSeatAlphabet,
      setSeatNumberA,
      setSeatNumberB,
      movieName,
      premiereName,
      premiereImage,
      showTimeDate,
      showTimeClock,
      premierePrice,
      show,
    } = this.state;

    return (
      <>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className={styles.modal}>
              Please select your seat
            </Modal.Title>
          </Modal.Header>
        </Modal>
        <NavBar isAdminPage={false} />
        <Container className={styles.bgCnt} fluid>
          <Container className={styles.bgCnt}>
            <Row className="pb-5">
              <Col className="pt-5" lg={8}>
                <p className={styles.title}>Choose Your Seat</p>
                <div className={`${styles.bgDiv} p-5 overflow-auto`}>
                  <Card className={styles.cardScreen}>
                    <Card.Body>
                      <div className={styles.screen}>
                        <p
                          className="text-center"
                          style={{marginBottom: "-5px"}}
                        >
                          screen
                        </p>
                      </div>
                      {setSeatAlphabet.map((item, index) => {
                        return (
                          <Seat
                            key={index}
                            seatAlphabet={item}
                            reserved={reservedSeat}
                            selected={selectedSeat}
                            bookingSeat={this.bookingSeat.bind(this)}
                          />
                        );
                      })}
                      <Row className={styles.rowSeat}>
                        <Col className={styles.colSeat}>
                          <div className={styles.seat}></div>
                        </Col>
                        {setSeatNumberA.map((item, index) => {
                          return (
                            <Col key={index} className={styles.colSeat}>
                              <div className={`${styles.seat} text-center`}>
                                {item}
                              </div>
                            </Col>
                          );
                        })}
                      </Row>
                    </Card.Body>
                    <Card.Body>
                      <p className={styles.titleSmall}>Seating Key</p>
                      <div className="d-flex flex-row">
                        <div
                          className={`${styles.seat} ${styles.avaliable}`}
                        ></div>
                        <div className={`${styles.semi} pl-2 pr-5`}>
                          Avaliable
                        </div>
                        <div
                          className={`${styles.seat} ${styles.selected}`}
                        ></div>
                        <div className={`${styles.semi} pl-2 pr-5`}>
                          Selected
                        </div>
                        <div className={`${styles.seat} ${styles.sold}`}></div>
                        <div className={`${styles.semi} pl-2 pr-5`}>Sold</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div
                  className={`${styles.down1} d-flex flex-sm-row flex-column justify-content-sm-between justify-content-end mt-5`}
                >
                  <Button
                    className={`${styles.btPrevious} mb-3`}
                    variant="outline-primary"
                  >
                    <Link to="/">Change your Movie</Link>
                  </Button>
                  <Button
                    className={styles.btPay}
                    variant="primary"
                    onClick={() => {
                      this.handleCheckOut();
                    }}
                  >
                    Checkout Now
                  </Button>
                </div>
              </Col>
              <Col className={`${styles.down} pt-5`} lg={4}>
                <p className={styles.title}>Order Info</p>
                <Card
                  style={{width: "382px", margin: "auto"}}
                  className="shadow"
                >
                  <Card.Body className="pb-3 mt-3">
                    <div className={styles.cardImg}>
                      <Image
                        src={`https://ticketingweb.herokuapp.com/backend1/api/${premiereImage}`}
                        style={{width: "120px"}}
                      />
                      <p className={`${styles.titleSmall} pt-2`}>
                        {premiereName} <span>Cinema</span>
                      </p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p className={styles.semi}>Movie selected</p>
                      <p className={styles.semi} style={{color: "black"}}>
                        {movieName}
                      </p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p className={styles.semi} style={{color: "black"}}>
                        {showTimeClock}
                      </p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p className={styles.semi}>One ticket price</p>
                      <p className={styles.semi} style={{color: "black"}}>
                        <span>$</span>
                        {premierePrice}
                      </p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p className={styles.semi}>Seat choosed</p>
                      <p className={styles.semi} style={{color: "black"}}>
                        {selectedSeat.map((item, index) => {
                          return <span key={index}>{`${item}, `}</span>;
                        })}
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                      <p
                        className={styles.titleSmall}
                        style={{fontWeight: "600"}}
                      >
                        Total payment
                      </p>
                      <p
                        className={styles.titleSmall}
                        style={{fontWeight: "600", color: "#5F2EEA"}}
                      >
                        <span>$</span>
                        {selectedSeat.length * premierePrice}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}

export default Home;

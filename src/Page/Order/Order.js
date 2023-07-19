import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useNavigate} from "react-router-dom";
import NavbarPage from "../../Components/Navbar/Navbar";
// import Image from "../../Assets/ImgFilm/13SKEA.jpg";
import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import SeatFilm from "../../Components/Seat/Seat";
import style from "./Order.module.css";
function Seat(props) {
  const [seatAlphabet, setSeatAlphabet] = useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
  ]);
  const [seatNumberA, setSeatNumberA] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ]);
  const [reservedSeat, setReservedSeat] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const history = useNavigate();
  const handleBook = () => {
    console.log("hehe");
    history("/book");
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // bookingSeat();
  }, []);
  const bookingSeat = (seat) => {
    let tmpSelectedSeat = selectedSeat;
    const index = tmpSelectedSeat.indexOf(seat);
    console.log("ini bookingseat", index);
    console.log("ini bookingseat", [...selectedSeat]);
    // console.log("ini bookingseat", tmpSelectedSeat.splice(index, 1));
    if (reservedSeat.indexOf(seat) < 0) {
      if (index < 0) {
        // this.setState({
        setSelectedSeat([...seat, ...selectedSeat]);
        // });
      } else {
        console.log("masuk else sini");
        // this.setState({
        setSelectedSeat(tmpSelectedSeat.splice(index, 1));
        // });
      }
    } else {
    }
  };
  console.log("ini bookingseat", selectedSeat);
  return (
    <>
      <Container fluid>
        <NavbarPage />
        <div>
          <h3 className="text-center">Pilih Tempat dudukmu</h3>
        </div>
        <Row className="pb-5">
          {/* <Col className="pt-5" lg={8}> */}
          <div className={`${style.bgDiv} p-5 overflow-auto`}>
            <Card className={style.cardScreen}>
              <Card.Body>
                <div className={style.screen}>
                  <p className="text-center" style={{marginBottom: "-5px"}}>
                    screen
                  </p>
                  {/* <Image src={line} fluid /> */}
                </div>
                {seatAlphabet.map((item, index) => {
                  return (
                    <SeatFilm
                      key={index}
                      seatAlphabet={item}
                      reserved={reservedSeat}
                      selected={selectedSeat}
                      bookingSeat={bookingSeat.bind(item)}
                    />
                  );
                })}
                <Row className={style.rowSeat}>
                  <Col className={style.colSeat}>
                    <div className={style.seat}></div>
                  </Col>
                  {seatNumberA.map((item, index) => {
                    return (
                      <Col key={index} className={style.colSeat}>
                        <div className={`${style.seat} text-center`}>
                          {item}
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Card.Body>
              <Card.Body>
                <p className={style.titleSmall}>Seating Key</p>
                <div className="d-flex flex-row">
                  <div className={`${style.seat} ${style.avaliable}`}></div>
                  <div className={`${style.semi} pl-2 pr-5`}>Avaliable</div>
                  <div className={`${style.seat} ${style.selected}`}></div>
                  <div className={`${style.semi} pl-2 pr-5`}>Selected</div>
                  <div className={`${style.seat} ${style.sold}`}></div>
                  <div className={`${style.semi} pl-2 pr-5`}>Sold</div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div
            className={`${style.down1} d-flex flex-sm-row flex-column justify-content-sm-between justify-content-end mt-5`}
          >
            <Button
              className={`${style.btPrevious} mb-3`}
              variant="outline-primary"
            >
              {/* <Link to="/">Change your Movie</Link> */}
            </Button>
            <Button
              className={style.btPay}
              variant="primary"
              // onClick={() => {
              //   handleCheckOut();
              // }}
            >
              Checkout Now
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Seat;

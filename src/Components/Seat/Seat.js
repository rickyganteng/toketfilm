import {Row, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import style from "./Seat.module.css";
function BasicExample(props) {
  const [seatA, setSeatA] = useState([1, 2, 3, 4, 5, 6, 7]);
  const history = useNavigate();
  const handleBook = () => {
    console.log("hehe");
    history("/book");
  };
  const setAlphabetSeat = () => {
    setSeatA(seatA.map((item) => `${props.seatAlphabet}${item}`));
    // this.setState({
    // setSeatA(seatA);
    // });
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setAlphabetSeat();
  }, []);
  // console.log("props nih", props);
  return (
    <Row className={style.rowSeat}>
      <Col className={style.colSeat}>
        <div className={style.label}>{`${props.seatAlphabet} `}</div>
      </Col>
      {seatA.map((item, index) => {
        return (
          <Col className={style.colSeat} key={index}>
            <div
              onClick={() => props.bookingSeat(item)}
              className={`${style.seat}
             ${
               props.reserved.indexOf(item) > -1
                 ? style.seatSold
                 : props.selected.indexOf(item) > -1
                 ? style.seatSelected
                 : style.seatAvailabel
             }
            `}
            ></div>
          </Col>
        );
      })}
    </Row>
  );
}

export default BasicExample;

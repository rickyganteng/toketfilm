import {Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useNavigate} from "react-router-dom";
import Image from "../../Assets/ImgFilm/13SKEA.jpg";
function CardBioskop(props) {
  const history = useNavigate();
  const handleBook = () => {
    console.log("hehe");
    history("/order");
  };
  return (
    <Row>
      <Col md={3}>
        <Card style={{width: "15rem"}}>
          <Card.Body>
            <Card.Title className="text-center">CENTRAL CITY XXI</Card.Title>
            <Card.Text>
              <div className="text-center">17-07-2023</div>
              <div className="d-flex text-center justify-content-evenly mt-2">
                <div className="border border-2 rounded-3 ">2D</div>
                <div className="border border-2 rounded-3 ">R13+</div>
              </div>
            </Card.Text>
            <div className="d-flex text-center justify-content-evenly">
              <Button variant="primary" onClick={handleBook}>
                Book
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card style={{width: "15rem"}}>
          <Card.Body>
            <Card.Title className="text-center">CENTRAL CITY XXI</Card.Title>
            <Card.Text>
              <div className="text-center">17-07-2023</div>
              <div className="d-flex text-center justify-content-evenly mt-2">
                <div className="border border-2 rounded-3 ">2D</div>
                <div className="border border-2 rounded-3 ">R13+</div>
              </div>
            </Card.Text>
            <div className="d-flex text-center justify-content-evenly">
              <Button variant="primary" onClick={handleBook}>
                Book
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card style={{width: "15rem"}}>
          <Card.Body>
            <Card.Title className="text-center">CENTRAL CITY XXI</Card.Title>
            <Card.Text>
              <div className="text-center">17-07-2023</div>
              <div className="d-flex text-center justify-content-evenly mt-2">
                <div className="border border-2 rounded-3 ">2D</div>
                <div className="border border-2 rounded-3 ">R13+</div>
              </div>
            </Card.Text>
            <div className="d-flex text-center justify-content-evenly">
              <Button variant="primary" onClick={handleBook}>
                Book
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card style={{width: "15rem"}}>
          <Card.Body>
            <Card.Title className="text-center">CENTRAL CITY XXI</Card.Title>
            <Card.Text>
              <div className="text-center">17-07-2023</div>
              <div className="d-flex text-center justify-content-evenly mt-2">
                <div className="border border-2 rounded-3 ">2D</div>
                <div className="border border-2 rounded-3 ">R13+</div>
              </div>
            </Card.Text>
            <div className="d-flex text-center justify-content-evenly">
              <Button variant="primary" onClick={handleBook}>
                Book
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card style={{width: "15rem"}}>
          <Card.Body>
            <Card.Title className="text-center">CENTRAL CITY XXI</Card.Title>
            <Card.Text>
              <div className="text-center">17-07-2023</div>
              <div className="d-flex text-center justify-content-evenly mt-2">
                <div className="border border-2 rounded-3 ">2D</div>
                <div className="border border-2 rounded-3 ">R13+</div>
              </div>
            </Card.Text>
            <div className="d-flex text-center justify-content-evenly">
              <Button variant="primary" onClick={handleBook}>
                Book
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card style={{width: "15rem"}}>
          <Card.Body>
            <Card.Title className="text-center">CENTRAL CITY XXI</Card.Title>
            <Card.Text>
              <div className="text-center">17-07-2023</div>
              <div className="d-flex text-center justify-content-evenly mt-2">
                <div className="border border-2 rounded-3 ">2D</div>
                <div className="border border-2 rounded-3 ">R13+</div>
              </div>
            </Card.Text>
            <div className="d-flex text-center justify-content-evenly">
              <Button variant="primary" onClick={handleBook}>
                Book
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card style={{width: "15rem"}}>
          <Card.Body>
            <Card.Title className="text-center">CENTRAL CITY XXI</Card.Title>
            <Card.Text>
              <div className="text-center">17-07-2023</div>
              <div className="d-flex text-center justify-content-evenly mt-2">
                <div className="border border-2 rounded-3 ">2D</div>
                <div className="border border-2 rounded-3 ">R13+</div>
              </div>
            </Card.Text>
            <div className="d-flex text-center justify-content-evenly">
              <Button variant="primary" onClick={handleBook}>
                Book
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card style={{width: "15rem"}}>
          <Card.Body>
            <Card.Title className="text-center">CENTRAL CITY XXI</Card.Title>
            <Card.Text>
              <div className="text-center">17-07-2023</div>
              <div className="d-flex text-center justify-content-evenly mt-2">
                <div className="border border-2 rounded-3 ">2D</div>
                <div className="border border-2 rounded-3 ">R13+</div>
              </div>
            </Card.Text>
            <div className="d-flex text-center justify-content-evenly">
              <Button variant="primary" onClick={handleBook}>
                Book
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CardBioskop;

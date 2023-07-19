import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useNavigate} from "react-router-dom";
import Image from "../../Assets/ImgFilm/13SKEA.jpg";
function BasicExample(props) {
  const history = useNavigate();
  const handleBook = () => {
    console.log("hehe");
    history("/book");
  };
  return (
    <Card style={{width: "15rem"}}>
      <Card.Img variant="top" src={Image} />
      <Card.Body>
        <Card.Title className="text-center">Judul Film</Card.Title>
        <Card.Text>
          <div className="text-center">
            Kisah tentang seorang fisikawan Amerika Serikat bernama J. Robert
            Oppenheimer yang mengembangkan bom atom.
          </div>
          <div className="d-flex text-center justify-content-evenly mt-2">
            <div className="border border-2 rounded-3 ">2D</div>
            <div className="border border-2 rounded-3 ">R13+</div>
          </div>
        </Card.Text>
        <div className="d-flex text-center justify-content-evenly">
          <Button variant="primary" onClick={handleBook}>
            Buy Ticket
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;

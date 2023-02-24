import Container from "react-bootstrap/Container";
import { useState } from "react";
import Card from "react-bootstrap/Card";


const CityCard = (props) => {
  const { name, img, desc, more } = props;
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Card
      onClick={handleClick}
      className="city-card m-auto  rounded-2 transition-transform"
      role="button"
    >
      {show ? (
        <Card >
          <Card.Img variant="top" src={img} alt="" className="city-card-img" />
        </Card>
      ) : (
        <Container className="city-card-par">
          <p className="bg-light p-1 rounded fs-5 bg-white">{desc}</p>
          <a
            href={more}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary text-white mb-3 p-1 "
          >
            DAHA FAZLA BİLGİ İÇİN
          </a>
        </Container>
      )}
      <Card.Footer><Card.Title> {name}</Card.Title></Card.Footer>
    </Card>
  );
};

export default CityCard;

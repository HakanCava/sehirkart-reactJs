// import { Container, Image, Row } from "react-bootstrap"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../assets/turkiye.png";
const Header = () => {
  return (
    
      <Row className="bg-light   align-items-center justify-content-center p-2 rounded-3 m-1">
        <Col xl={4}className="text-xl-start text-lg-center  ">
          <Image className="rounded-circle w-50 " src={logo}></Image>
        </Col>
        <Col xl={8}>
          <h1 className="display-4 fw-bold font-monospace title">
            Türkiye'nin Şehirleri
          </h1>
        </Col>
      </Row>
  
  );
};

export default Header;

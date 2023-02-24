import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import data from "../helpers/data";
import CityCard from "./CityCard";
import FormControl from "react-bootstrap/FormControl";
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <FormControl
        type="search"
        placeholder="Şehrini Bul..."
        className="w-50 m-auto my-3"
        onChange={handleChange}
        value={search}
      />
      <Container className="card-container  my-4 p-3 rounded-5">
        <Row className="me-auto ms-auto  justify-content-center align-items-center g-2">
          {data
            .filter((item) =>
              item.name
                .toLocaleLowerCase()
                .includes(search.trim().toLocaleLowerCase())
            )
            .map((city) => (
              <Col key={city.id} className="" xl={3} lg={4} md={6}>
                <CityCard {...city} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;

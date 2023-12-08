import {  Col, Container, Form, Row } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
const CardContainer = () => {
const [search, setSearch] = useState("");
const handleChange = (e)=>(
setSearch(e.target.value)
)
const filteredData = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase().trim()));
  return (
    <div>
      <Form.Control placeholder="search a player" className="w-50 m-auto" onChange={handleChange} type="search"/>
      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="justify-content-center">
          {filteredData.map((player,index) => (
            <Col xl={3} lg={4} md={6} key={index} className="g-3">
         <PlayerCard {...player}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;

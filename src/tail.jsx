import React, { useState, useEffect } from "react";
import { Routes, Router } from "react-router";
import { Row, Col } from "reactstrap";
import { useNavigate } from "react-router";
// import getTime from "./apiData";

export default function Tail() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState([]);
  // const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://timeapi.io/api/timezone/availabletimezones")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setShow(json);
      });
  }, []);

  useEffect(() => {
    if(items.length) {

      const searchResult = items.filter((name) => {
        return name.toLowerCase().includes(search.toLowerCase())
      })
      console.log('res ' , searchResult)
      setShow(searchResult)
    }

    console.log(search.toLowerCase());
  }, [search, items]);

  const tiklama = (prop) => {
    navigate(`/bolge/${prop}`);
    console.log(prop);
  };

  const navigate = useNavigate();
  return (
    <div className="tail">
      <div className="aramaButon">
        <input
          type="text"
          placeholder="Arama"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {show.map((city) => (
        <div className="sehirler" key={city} onClick={() => tiklama(city)}>
          <Row xs="2">
            <Col>
              <h5 className="sehir">{city}</h5>
            </Col>
            <Col>
              <div className="ok">
                <b>{">"}</b>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

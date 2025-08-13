import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "reactstrap";
import DarkMode from "./DarkMode";

export default function BigHead() {
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    const fetchTime = () => {
      fetch("https://timeapi.io/api/time/current/zone?timeZone=Turkey")
        .then((res) => res.json())
        .then((json) => {
          setCurrent(json);
        });
    };

    fetchTime();

    const interval = setInterval(fetchTime, 60000);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const now = new Date();
  //     setTime(now);
  //     setDay(now.getDate());
  //     setMonth(now.getMonth() + 1);
  //     setDayName(now);
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  function monthToName(num) {
    const monthsMap = {
      1: "Ocak",
      2: "Subat",
      3: "Mart",
      4: "Nisan",
      5: "Mayis",
      6: "Haziran",
      7: "Temmuz",
      8: "Agustos",
      9: "Eylul",
      10: "Ekim",
      11: "Kasim",
      12: "Aralik",
    };
    return monthsMap[num];
  }

  function dayToDay(englishDay) {
    const daysMap = {
      Monday: "Pazartesi",
      Tuesday: "Salı",
      Wednesday: "Çarşamba",
      Thursday: "Perşembe",
      Friday: "Cuma",
      Saturday: "Cumartesi",
      Sunday: "Pazar",
    };

    return daysMap[englishDay];
  }

  return (
    <>
      <div className="bas">
        <Row>
          <Col xs="auto">
            <div className="buyukSaat">
              <p className="selam">Merhaba Ozgur</p>
              <h1 className="saat">
                <b>{current.time}</b>
              </h1>
              <p className="tarih">
                {current.day} {monthToName(current.month)},{" "}
                {dayToDay(current.dayOfWeek)}
              </p>
            </div>
          </Col>
          <Col>
            <DarkMode />
          </Col>
        </Row>
      </div>
    </>
  );
}

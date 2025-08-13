import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import "./yerelSaat.css";
import "./App.css";

function YerelSaat() {
  const [yerelSaat, setYerelSaat] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const path = params["*"] ?? "";
  const [ulke, sehir] = path.split("/");

  const backButton = () => {
    navigate("/");
  };

  useEffect(() => {
    let url;
    if (sehir === undefined) {
      console.log("girdi")
      url = "https://timeapi.io/api/time/current/zone?timeZone=" + ulke;
    } else {
      url =
        "https://timeapi.io/api/time/current/zone?timeZone=" +
        ulke +
        "%2F" +
        sehir;
    }

    const fetchOnce = () => {
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error("HTTP " + res.status);
          return res.json();
        })
        .then((json) => {
          setYerelSaat(json);
        })
        .catch((err) => {
          console.error("Fetch hatas:", err);
        });
    };

    fetchOnce();
    const interval = setInterval(fetchOnce, 1000);

    return () => clearInterval(interval);
  }, [ulke, sehir]);

  function dayToDay(englishDay) {
    const daysMap = {
      Monday: "Pazartesi",
      Tuesday: "Sali",
      Wednesday: "Çarşamba",
      Thursday: "Perşembe",
      Friday: "Cuma",
      Saturday: "Cumartesi",
      Sunday: "Pazar",
    };

    return daysMap[englishDay];
  }

  if (!yerelSaat) {
     return (
       <div className="baskaArkaPlan">
         <h1 className="baslik">
           <b>World Time</b>
         </h1>
         <button className="geri" onClick={backButton} href="/" />
         <p>Yükleniyor...</p>
       </div>
     );
   }

  return (
    <div className="baskaArkaPlan">
      <h1 className="baslik">
        <b>World Time</b>
      </h1>
      <button className="geri" onClick={backButton} href="/" />
      <div className="asilSaat">
        <div className="baskaSaat">{yerelSaat.hour}</div>
        <div className="ikiNokta">:</div>
        <div className="dakika">{yerelSaat.minute}</div>
      </div>
      <div className="konum">
        <h3>
          <b>{sehir}</b>
        </h3>
        <p>{ulke}</p>
      </div>
      <div className="tarihBilgi">
        <p>{dayToDay(yerelSaat.dayOfWeek)}</p>
        <p>{yerelSaat.date}</p>
      </div>
    </div>
  );
}

export default YerelSaat;

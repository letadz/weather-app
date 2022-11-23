import React, { useState } from "react";
import axios from "axios";
// Components
import Details from "../details/Details";
import Loading from "../loading/Loading";
// Icon
import { GoSearch } from "react-icons/go";
// style
import "./Weather.css";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  // API
  const API_KEY = "4053074007fec7148de17a2c81d6e994";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/";

  const url = `${BASE_URL}weather?q=${location}&units=metric&appid=${API_KEY}`;

  // FETCHING DATA
  const fetchDataHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((res) => {
      setWeather(res.data);
      console.log(res.data);
    });
    setLocation("");
    setLoading(false);
  };

//   const handleLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         let lat = position.coords.latitude;
//         let lon = position.coords.longitude;

//         setQuery({ lat, lon });
//       });
//     }
//   };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <main className="weather">
        <div className="weather-container">
          <form onSubmit={fetchDataHandler} className="weather-search">
            <div>
              <input
                type="text"
                placeholder="Enter city name..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button onClick={fetchDataHandler}>
              <GoSearch className="search-btn" />
            </button>
          </form>

          {/* WEATHER INFO */}
          {weather.main && <Details data={weather} />}
        </div>
      </main>
    );
  }
};

export default Weather;

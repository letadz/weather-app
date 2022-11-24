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
  // const [error, setError] = useState(null);

  const url = `${process.env.REACT_APP_BASE_URL}weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  // FETCHING DATA
  const fetchDataHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.get(url).then((res) => {
      setWeather(res.data);
      console.info(res.data);
    });

    setLocation("");
    setLoading(false);
  };

  // useEffect(() => {
  //   const fetchDataHandler = async () => {
  //     try {
  //       const res = await axios.get(url);
  //       setWeather(res.data);
  //       setError(null);
  //     } catch (err) {
  //       setError(err.message);
  //       setWeather(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchDataHandler();
  // });

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

          {/* {!location ? (
            <p>No data found!</p>
          ) : (
            <> */}
          {/* WEATHER INFO */}
          {weather.main && <Details data={weather} />}
          {/* </>
          )} */}
        </div>
      </main>
    );
  }
};

export default Weather;

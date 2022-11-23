import React from "react";

const Details = ({ data }) => {
  return (
    <div>
      <div className="weather-info">
        {/* NAME OF CITY AND COUNTRY */}
        <div>
          <p className="location">{`${data?.name} ${data?.sys?.country}`}</p>
          <p className="date">{new Date().toLocaleString()}</p>
        </div>

        {/* CLOUDS AND TEMPERATURE */}
        <div className="current-temp__container">
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="..."
              width="100"
              height="100"
            />
            <p className="clouds">{data.weather[0].main}</p>
          </div>

          <p className="current-temp">{`${Math.round(data?.main?.temp)}°C`}</p>
        </div>

        {/* MIN AND MAX TEMPERATURE */}
        <div className="bottom-container">
          <div className="box">
            <p className="temp-min-max">
              {`Min ${Math.round(data?.main?.temp_min)} °C / Max ${Math.round(
                data?.main?.temp_max
              )} °C`}
            </p>
          </div>

          {/* SPEED */}
          <div className="box">
            <p className="wind">{`${data?.wind?.speed} MPH`}</p>
            <p className="wind">Wind</p>
          </div>

          {/* FEELS LIKE */}
          <div className="box">
            <p className="wind">{data?.main?.feels_like}</p>
            <p className="wind">Feels Like</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

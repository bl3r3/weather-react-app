import React, { useState, useEffect, useCallback } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import getData from "./helpers/getData";

import Weather from "./Components/Weather";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [loaderActive, setLoaderActive] = useState(true);

  const updateData = useCallback(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    getData(lat, long).then((newData) => setData(newData));
    setLoaderActive(false);
  }, [lat, long]);

  useEffect(() => {
    updateData();
  }, [lat, long, updateData]);

  return (
    <div className="App">
      {typeof data.main != "undefined" ? (
        <>
          <h1>Current Weather App</h1>
          <Weather weatherData={data} />
        </>
      ) : (
        <Dimmer active={loaderActive}>
          <Loader />
        </Dimmer>
      )}
    </div>
  );
}

export default App;

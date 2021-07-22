const getData = async (lat, long) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  );
  const data = response.json();
  return data;
};

export default getData;

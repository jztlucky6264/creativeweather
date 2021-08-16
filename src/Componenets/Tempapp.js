import React, { useEffect, useState } from "react";
import StreetviewIcon from "@material-ui/icons/Streetview";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f1b8596ad0d65169db0a368367b81870`;
      const response = await fetch(url);

      const resJson = await response.json();
      console.log(resJson.main);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box mx-auto  ">
        <div className="inputData mx-auto">
          <input
            type="search"
            className="InputField"
            placeholder="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="Data_not_found">Data not found</p>
        ) : (
          <div>
            <div className="Info">
              <h2 className="location">
                <StreetviewIcon className="icon"></StreetviewIcon>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h4 className="temp_max">
                min:{city.temp_min}°C | max:{city.temp_max}°C
              </h4>
            </div>

            <div className=" wave wave_one"></div>
            <div className=" wave wave_two"></div>
            <div className="wave wave_three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;

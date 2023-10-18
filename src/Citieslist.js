import React, { useState, useEffect } from "react";
import axios from "axios";

const citiesPerStates = {
  Karnataka: [
    { id: 1, name: "Bangalore" },
    { id: 2, name: "Mysore" },
  ],
  Maharashtra: [
    { id: 1, name: "Pune" },
    { id: 2, name: "Mumbai" },
  ],
};

function CitiesList({ selectedState, selectedCity, setSelectedCity }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (selectedState) {
      //   axios.get(`http://api.minebrat.com/api/v1/states/cities/${selectedState}`)
      //     .then(response => setCities(response.data))
      //     .catch(error => console.error(error));
      // } else {
      //   setCities([]);
      // }
      const data = citiesPerStates[selectedState];
      setCities(data);
    }
  }, [selectedState]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <h3>City</h3>
      <select
        style={{ height: "36px" }}
        placeholder="Select City"
        value={selectedCity}
        onChange={handleCityChange}
      >
        <option value="">Select a city</option>
        {cities?.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitiesList;

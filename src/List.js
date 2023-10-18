import axios from "axios";
import React, { useState, useEffect } from "react";
import CitiesList from "./Citieslist";
import ResultComponent from "./Result";

function List() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);

  useEffect(() => {
    // axios.get('http://api.minebrat.com/api/v1/states')
    //   .then(response => setStates(response.data))
    //   .catch(error => console.error(error));
    const data = [
      { id: 1, name: "Karnataka" },
      { id: 2, name: "Maharashtra" },
    ];
    setStates(data);
  }, []);

  const handleSubmit = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h3>State</h3>
      <select
        style={{ height: "36px" }}
        placeholder="Select State"
        value={selectedState}
        onChange={(e) => {
          setSelectedCity("");
          setSelectedState(e.target.value);
        }}
      >
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state.id} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
      <CitiesList
        selectedState={selectedState}
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}
      />
      <ResultComponent
        selectedState={selectedState}
        selectedCity={selectedCity}
      ></ResultComponent>
    </div>
  );
}

export default List;

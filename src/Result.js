import React from "react";

function ResultComponent({ selectedState, selectedCity }) {
  if (!selectedState) {
    return <h1>Please Select State</h1>;
  }

  if (!selectedCity) {
    return <h1>Please Select City</h1>;
  }

  return <h1>{`You have selected ${selectedCity} in ${selectedState}`}</h1>;
}

export default ResultComponent;

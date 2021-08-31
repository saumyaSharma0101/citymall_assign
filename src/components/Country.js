import React, { useState } from "react";

function Country(props) {
  const [country, setCountry] = useState();

  const onCountryChange = (event) => {
    props.onCountryChange(event.target.value);
    setCountry(event.target.value);
  };
  return (
    <div>
      <select value={country} onChange={onCountryChange}>
        <option value="india"> India </option>
        <option value="indonesia"> Indonesia </option>
        <option value="usa"> USA </option>
      </select>
    </div>
  );
}

export default Country;

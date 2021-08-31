import React, { useState } from "react";

function GenderDrpdwn(props) {
  const [gender, setGender] = useState();

  const onGenderChange = (event) => {
    props.onGenderChange(event.target.value);
    setGender(event.target.value);
  };
  return (
    <div>
      <select value={gender} onChange={onGenderChange}>
        <option value="female"> Female </option>
        <option value="male"> Male </option>
        <option value="other"> Other </option>
      </select>
    </div>
  );
}

export default GenderDrpdwn;

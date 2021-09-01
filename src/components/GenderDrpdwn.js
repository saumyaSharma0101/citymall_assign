import React, { useState } from "react";
import "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function GenderDrpdwn(props) {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    formControl: {
      minWidth: 120,
    },
  }));
  const classes = useStyles();
  const [gender, setGender] = useState();

  const onGenderChange = (event) => {
    props.onGenderChange(event.target.value);
    setGender(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          onChange={onGenderChange}
        >
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default GenderDrpdwn;

import React, { useState } from "react";
import "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function Country(props) {
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
  const [country, setCountry] = useState();

  const onCountryChange = (event) => {
    props.onCountryChange(event.target.value);
    setCountry(event.target.value);
  };
  return (
    <div>
      <div>
        <FormControl className={classes.formControl}>
          {/* <InputLabel id="demo-simple-select-label">Country</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            onChange={onCountryChange}
          >
            <MenuItem value="india">India</MenuItem>
            <MenuItem value="indonesia">Indonesia</MenuItem>
            <MenuItem value="usa">USA</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Country;

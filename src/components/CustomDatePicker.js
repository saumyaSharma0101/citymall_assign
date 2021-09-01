import React, { useState } from "react";
import "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function CustomDatePicker() {
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

  return (
    <>
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          type="date"
          defaultValue=""
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      ;
    </>
  );
}

export default CustomDatePicker;

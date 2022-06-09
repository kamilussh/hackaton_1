import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const Filter = ({ type, setType }) => {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Filter</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel value="Pants" control={<Radio />} label="Pants" />
          <FormControlLabel value="Shirt" control={<Radio />} label="Shirts" />
          <FormControlLabel value="Shoes" control={<Radio />} label="Shoes" />
          <FormControlLabel
            value="Accessories"
            control={<Radio />}
            label="Accessories"
          />
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="All clothing"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;

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
          <FormControlLabel
            value="Laptop"
            control={<Radio />}
            label="Ноутбук/планшет"
          />
          <FormControlLabel value="Phone" control={<Radio />} label="Телефон" />
          <FormControlLabel
            value="Accessories"
            control={<Radio />}
            label="Аксессуары"
          />
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="Все товары"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;

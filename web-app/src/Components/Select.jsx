import React, { Component } from "react";
import { skills } from "../Constants/skills";

import CreatableSelect from "react-select/creatable";

export const Select = (props) => {
  const handleChange = (newValue, actionMeta) => {};

  return (
    <CreatableSelect
      isMulti
      onChange={props.onChange}
      options={skills}
      isSearchable
      value={props.value}
    />
  );
};

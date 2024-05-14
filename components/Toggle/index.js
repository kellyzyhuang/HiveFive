import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

export default function ToggleSwitch({ isEnabled, onChange }) {
  const [checked, setChecked] = useState(false);

  const handleChange = val => {
    setChecked(val)
  }

  const boxShadow = '0px 0px 2px 2px #F48978';  
  const activeBoxShadow = '0px 0px 2px 2px #FFC93D';

  return (
      <ReactSwitch
        checked={isEnabled}
        onChange={onChange}
        onColor="#FEECAC"
        offColor="#FFE6E2"
        checkedIcon={false}
        uncheckedIcon={false}
        boxShadow={checked ? activeBoxShadow : boxShadow}
        activeBoxShadow="0px 0px 0px 0px transparent"
      />
  );
}

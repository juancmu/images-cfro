import React, { useState } from "react";
import Toggle from "react-native-toggle-element";

const [toggleValue, setToggleValue] = useState(false);
const ToogleCom = () => {
  return (
    <Toggle
    value={toggleValue}
    onPress={(newState) => setToggleValue(newState)}
    leftTitle="Left"
    rightTitle="Right"
  />
  )
}

export default ToogleCom
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native";
import styled from "styled-components";

const RoundFace = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const ClockText = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: #333;
`;

const ClockFace = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = () => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <View>
      <RoundFace>
        <ClockText>{formattedTime()}</ClockText>
      </RoundFace>
    </View>
  );
};

export default ClockFace;

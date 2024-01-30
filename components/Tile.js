import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const TileStyled = styled.View`
  background-color: ${(props) => props.back};
  flex: 1;
`;

const TileContainer = styled.View`
  display: flex;
  flex-direction: column;
  height: 50%;
`;

const Tile = ({ back, children }) => {
  return (
    <TileContainer>
      <TileStyled back={back}>
        <Text>{children}</Text>
      </TileStyled>
    </TileContainer>
  );
};

export default Tile;

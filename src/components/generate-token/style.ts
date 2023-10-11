import styled from "styled-components";
import { Card, Button } from "antd";

export const StyledCard = styled(Card)`
  width: 500px;
  height: 40vh;
  position: absolute; 
  top: 25vh;
  left: 20%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 12px 20px 0px rgba(0,0,0,0.2);
  }
`;

export const GenerateButton = styled(Button)`
  margin-top: 50px;
  width: 100%;
`;

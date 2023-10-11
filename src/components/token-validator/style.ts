import styled from "styled-components";
import { Card, Button } from "antd";

export const StyledCardRight = styled(Card)`
  width: 500px;
  height: 40vh;
  position: absolute;
  top: 25vh;
  right: 25%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 12px 20px 0px rgba(0,0,0,0.2);
  }
`;

export const ValidateButton = styled(Button)`
  width: 100%;
`;

export const TokenDisplay = styled.div`
  margin: 20px 0;
  font-size: 20px;
  text-align: center;
  letter-spacing: 2px; 
  font-weight: bold;
`;

export const StatusIcon = styled.div`
  font-size: 32px;
  text-align: center;
  color: ${props => props.color};
`;

import styled from "styled-components";
import { theme } from "../../assets/theme";
interface PPCircletype {
  ppimage?: string;
  isprofile?: boolean;
}

const PPCirclestyle = styled.div<{ $ppimage?: string; $isprofile?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-color: #0015ff;
  background-image: url(${(props) => props.$ppimage});
  background-size: 100%;
  border: ${(props) => (props.$isprofile ? `6px solid ${theme.borderblue}` : "none")};
`;

export default function PPCircle(props?: PPCircletype) {
  return <PPCirclestyle $isprofile={props?.isprofile} $ppimage={props?.ppimage}></PPCirclestyle>;
}

//

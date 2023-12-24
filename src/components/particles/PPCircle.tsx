import styled from "styled-components";
import { theme } from "../../assets/theme";
interface PPCircletype {
  ppimage?: string;
  isprofile?: boolean;
}

export const PPCirclestyle = styled.div<{ $ppimage?: string; $isprofile?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-color: #0015ff;
  background-image: url(${(props) => props.$ppimage});
  background-size: 100%;
  border: ${(props) => (props.$isprofile ? `6px solid ${theme.borderblue}` : "none")};
  position: ${(props) => (props.$isprofile ? `absolute` : "static")};
  top: ${(props) => (props.$isprofile ? `10px` : "")};
  left: ${(props) => (props.$isprofile ? `2px` : "")};
`;

export default function PPCircle(props?: PPCircletype) {
  return <PPCirclestyle className="PPCircle" $isprofile={props?.isprofile} $ppimage={props?.ppimage}></PPCirclestyle>;
}

//

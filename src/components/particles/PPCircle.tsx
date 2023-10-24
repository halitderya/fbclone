import styled from "styled-components";
interface PPCircletype {
  ppimage: string;
}

const PPCirclestyle = styled.div<{ $ppimage?: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-color: #0015ff;
  background-image: url(${(props) => props.$ppimage});
  background-size: 100%;
`;

export default function PPCircle(props?: PPCircletype) {
  return <PPCirclestyle $ppimage={props?.ppimage}></PPCirclestyle>;
}

//

import { useState } from "react";
import styled from "styled-components";
interface PPCircletype {
  ppimage: string;
}

const PPCircle = styled.div<{ $ppimage?: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-color: red;
  background-image: url(${(props) => props.$ppimage});
  background-size: 100%;
`;

export default function PPCircleComponent(props: PPCircletype) {
  const [number, setNumber] = useState(0);
  const clicked = () => {
    setNumber(number + 1);
  };

  return (
    <PPCircle onClick={clicked} data-cy="ppcircle" $ppimage={props.ppimage}>
      {number}
    </PPCircle>
  );
}

//

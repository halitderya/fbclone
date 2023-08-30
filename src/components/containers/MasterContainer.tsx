import styled from "styled-components";
const MasterContainer = styled.div<{
  $divwidth?: number;
  $divpadding?: number;
}>`
  width: ${(props) => props.$divwidth}%;
  // border: 5px solid black;
  box-sizing: border-box;

  padding: ${(props) => props.$divpadding}px;
`;

export default MasterContainer;

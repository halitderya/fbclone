import styled from "styled-components";

const Dialog = styled.dialog<{ $show?: boolean }>`
  height: 300px;
  width: 300px;
`;

export default function DialogFC(Show: boolean) {
  return <Dialog>Dialog</Dialog>;
}

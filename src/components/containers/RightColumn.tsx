import styled from "styled-components";
import ContactsContainer from "../containers/RightColumn/ContactsContainer";
const RightColumn = styled.div`
  border: 1px dashed blue;
  width: 23%;
  float: right;
`;

export default function RightColumnFC() {
  return (
    <>
      <RightColumn>
        <ContactsContainer />
      </RightColumn>
    </>
  );
}

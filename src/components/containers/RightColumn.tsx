import styled from "styled-components";
import ContactsContainer from "../containers/RightColumn/ContactsContainer";
const RightColumn = styled.div`
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

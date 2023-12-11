import styled from "styled-components";
import ContactsContainer from "../containers/RightColumn/ContactsContainer";
const RightColumn = styled.div`
  width: 30%;
  float: right;
  margin-left: 20px;
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

import styled from "styled-components";
import ContactsContainer from "../containers/RightColumn/ContactsContainer";
const RightColumn = styled.div`
  width: 25%;
  max-width: 450px;
  float: right;
  margin-left: 20px;
  @media (max-width: 899px) {
    display: none;
  }
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

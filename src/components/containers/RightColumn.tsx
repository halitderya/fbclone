import styled from "styled-components";
import ContactsContainer from "../containers/RightColumn/ContactsContainer";
const RightColumn = styled.div`
  width: 25%;
  max-width: 300px;
  /* border: 3px dotted red; */
  justify-content: space-around;
  margin-left: 20px;
  box-sizing: border-box;

  @media (max-width: 899px) {
    display: none;
  }

  @media (min-width: 1920px) {
    margin-right: auto;
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

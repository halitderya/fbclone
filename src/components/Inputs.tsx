import styled from "styled-components";
//import magnify from "../assets/magnify-icon.svg";

const SearchInput = styled.input`
  border-width: 0px;
  background-color: #f0f2f5;
  border-width: 0cap;
  height: inherit;
  border-radius: 15px;
  font-size: 16px;
  margin: 5px;
  border: none;

  min-width: 200px;
  outline: none;
  &:focus {
    outline: none;
  }
`;
const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  padding-left: 10px;
`;

const Spanned = styled.span`
  border-width: 0px;
  border-radius: 5px;
  height: 90%;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
`;
const Magnify = styled.svg`
  width: 18px;
  height: 18px;
  padding-left: 5px;
`;
function SearchBarComponent() {
  return (
    <DivContainer>
      <Spanned>
        <Magnify viewBox="0 0 16 16">
          <circle cx="5.5" cy="5.5" r="4.5" stroke="#65676b" strokeWidth="1" fill="none" />
          <line x1="9" y1="9" x2="13" y2="13" stroke="#65676b" strokeWidth="1" />
        </Magnify>
        <SearchInput placeholder="Search on Facebook..."></SearchInput>
      </Spanned>
    </DivContainer>
  );
}

export default SearchBarComponent;

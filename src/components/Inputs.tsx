import styled from "styled-components";

const SearchInput = styled.input`
  display: flex;
`;
const Spaned = styled.span`
  width: 200px;
  height: ;
`;
function SearchBarComponent() {
  return (
    <Spaned>
      <SearchInput placeholder="123"></SearchInput>
    </Spaned>
  );
}

export default SearchBarComponent;

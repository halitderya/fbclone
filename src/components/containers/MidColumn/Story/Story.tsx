import styled from "styled-components";

export interface StoryType {
  text: string;
  storyimage: string;
  ppimage: string;
}

const StoryMain = styled.div`
  height: 300px;
  width: 180px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  //border: 1px red dotted;
  border-radius: 10px;
  background-size: cover;

  min-width: 180px;
  min-height: 300px;
  max-width: 180px;
  max-height: 300px;
  margin-left: 10px;
  margin-right: 10px;
  width: max-content;
`;
const StoryPP = styled.div<{ $ppimage?: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-color: red;
  background-image: url(${(props) => props.$ppimage});
  background-size: 100%;
`;
const StoryBG = styled.div<{ $storyimage: string }>`
  background-image: url(${(props) => props.$storyimage});
  padding: 5px;
  display: flex;
  height: 100%;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

const StoryText = styled.label`
  display: flex;
  font-weight: 400;
  word-wrap: break-word;
  flex-wrap: wrap;
  color: #ffffffc3;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;

export function Story(props: StoryType) {
  return (
    <StoryMain>
      <StoryBG $storyimage={props.storyimage}>
        <StoryPP $ppimage={props.ppimage}></StoryPP>
        <StoryText>{props.text}</StoryText>
      </StoryBG>
    </StoryMain>
  );
}

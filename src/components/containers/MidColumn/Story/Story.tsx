import styled from "styled-components";
import PPCircle from "./../../../particles/PPCircle";
export interface StoryType {
  text?: string;
  storyimage: string;
  ppimage?: string;
  username?: string;
}

const StoryMain = styled.div`
  height: 300px;
  width: 180px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-size: cover;
  position: relative;

  min-width: 180px;
  min-height: 300px;
  max-width: 180px;
  max-height: 300px;
  margin-left: 10px;
  margin-right: 10px;
  width: max-content;
`;

const StoryText = styled.label`
  display: flex;
  user-select: none;
  font-weight: 600;
  word-wrap: break-word;
  flex-wrap: wrap;
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #ffffffcc;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;

const StoryImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export default function Story(props: StoryType) {
  return (
    <StoryMain>
      <StoryImage loading="lazy" src={props.storyimage} alt="Story image" />
      <PPCircle isprofile={true} ppimage={props.ppimage} />
      <StoryText>{props.username}</StoryText>
    </StoryMain>
  );
}

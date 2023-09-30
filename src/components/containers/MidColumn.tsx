import styled from "styled-components";
import {} from "../Buttons";
import StoryContainer from "./MidColumn/Story/StoryContainer";
import PostContainer from "./MidColumn/Post/PostMasterContainer";
const MidColumn = styled.div`
  //border: 1px dashed green;
  width: 40%;
`;

function MidColumnComponent() {
  return (
    <MidColumn>
      <StoryContainer data-cy="story-container"></StoryContainer>

      <PostContainer data-cy="post-container"></PostContainer>
    </MidColumn>
  );
}

export default MidColumnComponent;

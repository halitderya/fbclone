import styled from "styled-components";
import {} from "../Buttons";
import StoryContainer from "./MidColumn/Story/StoryContainer";
import PostContainer from "./MidColumn/Post/PostMasterContainer";
import { useContext } from "react";
import { PostContext, PostProvider } from "../../Contexts/PostContext";
import PostType from "../../../public/FakeAPI/Post/Type";

const MidColumn = styled.div`
  //border: 1px dashed green;
  width: 40%;
`;

export default function MidColumnComponent() {
  const postsData: PostType = useContext(PostContext);
  console.log(PostContext);
  return (
    <MidColumn>
      <StoryContainer></StoryContainer>
      <PostProvider>
        {postsData.Posts.map((_, index) => (
          <PostContainer key={index} />
        ))}
      </PostProvider>
    </MidColumn>
  );
}

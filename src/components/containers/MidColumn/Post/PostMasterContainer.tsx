import styled from "styled-components";
import Post from "./Post";
import PostHeader from "./PostHeaderContainer";
import PostFooter from "./PostFooterContainer";
const PostContainer = styled.div`
  border: 1px red solid;
  width: 100%;
  height: 600px;
`;
export default function PostContainerComponent() {
  return (
    <>
      <PostContainer>
        <PostHeader></PostHeader>
        <Post></Post>
        <PostFooter></PostFooter>
      </PostContainer>
    </>
  );
}

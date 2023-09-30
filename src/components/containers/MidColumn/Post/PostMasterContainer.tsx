import styled from "styled-components";
import Post from "./Post";
import PostHeader from "./PostHeaderContainer";
import PostFooter from "./PostFooter/PostFooterContainer";
const PostContainer = styled.div`
  border: 1px red solid;
  width: 100%;
  height: 600px;
`;
export default function PostContainerComponent() {
  return (
    <>
      <PostContainer data-cy="postcontainer">
        <PostHeader></PostHeader>
        <Post data-cy="post"></Post>
        <PostFooter></PostFooter>
      </PostContainer>
    </>
  );
}

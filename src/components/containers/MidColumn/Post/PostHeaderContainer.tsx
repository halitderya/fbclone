import styled from "styled-components";
import PPCircle from "./../../../particles/PPCircle";

const PostHeader = styled.div`
  border: 1px red solid;
  height: 80px;
`;
const PostPP = styled.div``;
const PostTimeStamp = styled.label``;
const PostExit = styled.button``;
const PostSeemore = styled.button``;
const PostTitle = styled.label``;
export default function PostHeaderContainer() {
  return <PostHeader data-cy="postheader"></PostHeader>;
}

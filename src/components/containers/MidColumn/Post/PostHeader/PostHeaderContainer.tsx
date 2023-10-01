import styled from "styled-components";
import PPCircle from "../../../../particles/PPCircle";
import { useContext } from "react";
import { PostContext } from "../../../../../Contexts/PostContext";

const { setPagePosts } = useContext(PostContext);

const PostHeader = styled.div`
  height: 80px;
`;
const PostPP = styled.div``;
const PostTimeStamp = styled.label``;
const PostExit = styled.button``;
const PostSeemore = styled.button``;
const PostTitle = styled.label``;
export default function PostHeaderContainer() {
  return <PostHeader></PostHeader>;
}

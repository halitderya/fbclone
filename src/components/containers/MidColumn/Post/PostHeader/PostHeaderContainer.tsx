import styled from "styled-components";
import PPCircle from "../../../../particles/PPCircle";
import { useContext, useState } from "react";
import { PostContext } from "../../../../../Contexts/PostContext";
import PostType from "../../../../../../public/FakeAPI/Post/Type";
const PostHeaderComponent = styled.div`
  height: 80px;
`;

const PostPP = styled.div``;
const PostTimeStamp = styled.label``;
const PostExit = styled.button``;
const PostSeemore = styled.button``;
const PostTitle = styled.label``;
export default function PostHeaderContainer() {
  const PostHeader = useContext(PostContext);
  console.log(PostHeader);
  return <PostHeaderComponent></PostHeaderComponent>;
}

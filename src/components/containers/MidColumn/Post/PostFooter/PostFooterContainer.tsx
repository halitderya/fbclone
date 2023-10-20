import styled from "styled-components";
import PostFooterHeader from "./PostFooterHeader";
import PostFooterMediacontrols from "./PostFooterMediaControls";
import { Comment, Post } from "../../../../../../public/FakeAPI/Post/Type";

const PostFooterContainer = styled.div`
  height: 80px;
  border: 2px dotted red;
`;

const PostFooterLine = styled.hr`
  margin-left: 20px;
  margin-right: 20px;
`;

export interface IPostFooterProps {
  PostFooterText: string;
  comments: Comment[];
}

export default function PostFooterComponent(props: { props: IPostFooterProps }) {
  return (
    <>
      <PostFooterContainer>
        <PostFooterHeader post={post}></PostFooterHeader>
        <PostFooterLine></PostFooterLine>
        <PostFooterMediacontrols></PostFooterMediacontrols>
      </PostFooterContainer>
    </>
  );
}

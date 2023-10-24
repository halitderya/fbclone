import styled from "styled-components";
import PostFooterHeader from "./PostFooterHeader";
import PostFooterMediacontrols from "./PostFooterMediaControls";
import { PostFooterProps } from "../../../../../../public/FakeAPI/Post/Type";

const PostFooterContainer = styled.div`
  height: 80px;
  padding: 10px;
`;

const PostFooterLine = styled.hr`
  margin-left: 20px;
  margin-right: 20px;
`;

export default function PostFooterComponent(props: PostFooterProps) {
  return (
    <>
      <PostFooterContainer>
        <PostFooterHeader Comments={props.Comments} PostFooterText={props.PostFooterText} Reactions={props.Reactions}></PostFooterHeader>
        <PostFooterLine></PostFooterLine>
        <PostFooterMediacontrols></PostFooterMediacontrols>
      </PostFooterContainer>
    </>
  );
}

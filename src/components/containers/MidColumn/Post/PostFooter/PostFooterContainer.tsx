import styled from "styled-components";
import { PostFooterProps } from "../../../../../../public/FakeAPI/Post/PostType";
import PostFooterCommentCountFC from "./PostComment/PostFooterCommentCount";

const PostFooterContainer = styled.div`
  height: 80px;
  padding: 10px;
`;
const PostFooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostFooterReactions = styled.div``;

const PostFooterMediaControls = styled.div`
  height: 30px;
`;

const PostFooterLine = styled.hr`
  margin-left: 20px;
  margin-right: 20px;
`;

function PostFooterReactionsComponent() {
  return <PostFooterReactions>reactions here</PostFooterReactions>;
}

function PostFooterMediaControlComponent() {
  return <PostFooterMediaControls>FooterMediaControls</PostFooterMediaControls>;
}
function PostFooterHeaderFC(props: PostFooterProps) {
  /*   props.ToggleView = (e) => {
    console.log("toggled"); */

  return (
    <PostFooterHeader>
      <PostFooterReactionsComponent></PostFooterReactionsComponent>
      <PostFooterCommentCountFC PostFooterProps={props}></PostFooterCommentCountFC>
    </PostFooterHeader>
  );
}

export default function PostFooterComponent(props: PostFooterProps) {
  return (
    <>
      <PostFooterContainer>
        <PostFooterHeaderFC Comments={props.Comments} PostFooterText={props.PostFooterText} Reactions={props.Reactions}></PostFooterHeaderFC>
        <PostFooterLine></PostFooterLine>
        <PostFooterMediaControlComponent></PostFooterMediaControlComponent>
      </PostFooterContainer>
    </>
  );
}

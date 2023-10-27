import styled from "styled-components";
import PostFooterReactionsComponent from "./PostFooterReactions";
import PostFooterCommentCountFC from "./PostComment/PostFooterCommentCount";
import { PostFooterProps } from "../../../../../../public/FakeAPI/Post/PostType";

const PostFooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function PostFooterHeaderFC(props: PostFooterProps) {
  return (
    <PostFooterHeader>
      <PostFooterReactionsComponent></PostFooterReactionsComponent>
      <PostFooterCommentCountFC PostFooterProps={props}></PostFooterCommentCountFC>
    </PostFooterHeader>
  );
}

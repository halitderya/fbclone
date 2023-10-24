import styled from "styled-components";
import PostFooterReactionsComponent from "./PostFooterReactions";
import PostFooterCommentCountFC from "./PostComment/PostFooterCommentCount";
import { PostFooterProps } from "../../../../../../public/FakeAPI/Post/Type";

const PostFooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function PostFooterHeaderFC(props: PostFooterProps) {
  return (
    <PostFooterHeader>
      <PostFooterReactionsComponent></PostFooterReactionsComponent>
      <PostFooterCommentCountFC commentcount={props.Comments?.length.toString() + " Comments"}></PostFooterCommentCountFC>
    </PostFooterHeader>
  );
}

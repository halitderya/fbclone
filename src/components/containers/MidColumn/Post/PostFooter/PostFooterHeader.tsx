import styled from "styled-components";
import PostFooterReactionsComponent from "./PostFooterReactions";
import PostFooterCommentCountFC from "./PostFooterCommentCount";
import { Post } from "../../../../../../public/FakeAPI/Post/Type";

const PostFooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export default function PostFooterHeaderFC(props: { post: Post }) {
  return (
    <PostFooterHeader>
      <PostFooterReactionsComponent></PostFooterReactionsComponent>
      <PostFooterCommentCountFC comments={props.post.PostFooter.comments}></PostFooterCommentCountFC>
    </PostFooterHeader>
  );
}

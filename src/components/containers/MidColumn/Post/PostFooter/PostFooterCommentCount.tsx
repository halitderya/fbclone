import styled from "styled-components";
import { Comment } from "../../../../../../public/FakeAPI/Post/Type";

interface PostFooterCommentCountFCProps {
  comments: Comment[];
}

const PostFooterCommentCount = styled.div``;

export default function PostFooterCommentCountFC(comments: PostFooterCommentCountFCProps) {
  console.log(typeof comments);
  return <PostFooterCommentCount>{}</PostFooterCommentCount>;
}

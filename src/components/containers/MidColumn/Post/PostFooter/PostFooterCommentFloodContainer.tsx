import styled from "styled-components";

export interface PostCommentsType {
  display: boolean;
  comments?: {
    comment: string;
    commentor: string;
  }[];
}

const PostFooterCommentFloodContainer = styled.div<{ $display?: boolean }>`
  border: 2px solid orange;
  height: 20px;
  display: ${(props) => (props.$display ? "flex" : "none")};
`;
const PostFooterCommentFlood = styled.div``;
const PostComment = styled.label``;
const PostCommentSpan = styled.span``;
const PostCommentor = styled.label``;

export default function PostFooterCommentContainerFC({ display, comments }: PostCommentsType) {
  comments?.map((cmt) => {
    <PostCommentSpan>
      <PostCommentor>{cmt.commentor}</PostCommentor>
      <PostComment>{cmt.comment}</PostComment>;
    </PostCommentSpan>;
  });

  return (
    <PostFooterCommentFloodContainer $display={display}>
      <PostFooterCommentFlood>
        <PostComment></PostComment>
      </PostFooterCommentFlood>
    </PostFooterCommentFloodContainer>
  );
}

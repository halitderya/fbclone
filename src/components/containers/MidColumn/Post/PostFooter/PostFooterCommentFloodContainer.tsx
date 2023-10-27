import styled from "styled-components";
import { Comment } from "../../../../../../public/FakeAPI/Post/PostType";

const PostFooterCommentFloodContainer = styled.div<{ $display?: boolean }>`
  border: 2px solid orange;
  height: 20px;
  display: ${(props) => (props.$display ? "flex" : "none")};
`;
const PostFooterCommentFlood = styled.div``;
const PostComment = styled.label``;
const PostCommentSpan = styled.span`
  padding-top: 10px;
  padding-bottom: 10px;
`;
const brk = styled.br``;
const PostCommentor = styled.label`
  font-weight: 800;
`;

export default function PostFooterCommentContainerFC() {
  return (
    <>
      {" "}
      <PostCommentSpan>
        <PostCommentor>halit derya: </PostCommentor>
        <PostComment>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, incidunt culpa veniam cum explicabo quaerat!</PostComment>
      </PostCommentSpan>
      <PostCommentSpan>
        <PostCommentor>halit derya: </PostCommentor>
        <PostComment>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptate aliquid culpa ipsa labore ab nam eaque blanditiis neque ipsam, pariatur, natus officia mollitia explicabo?</PostComment>
      </PostCommentSpan>
      {<br></br>}
      <PostFooterCommentFloodContainer $display={true}>
        <PostFooterCommentFlood>
          <PostComment></PostComment>
        </PostFooterCommentFlood>
      </PostFooterCommentFloodContainer>
    </>
  );
}

import styled from "styled-components";
import PostFooterHeader from "./PostFooterReactions";
import PostFooterMediacontrols from "./PostFooterMediaControls";
import PostFooterText from "./PostFooterText";

const PostFooterContainer = styled.div`
  height: 160px;
`;

const PostFooterLine = styled.hr`
  margin-left: 20px;
  margin-right: 20px;
`;
export default function PostFooterComponent() {
  return (
    <>
      <PostFooterContainer>
        <PostFooterText></PostFooterText>
        <PostFooterHeader></PostFooterHeader>
        <PostFooterLine></PostFooterLine>
        <PostFooterMediacontrols></PostFooterMediacontrols>
      </PostFooterContainer>
    </>
  );
}

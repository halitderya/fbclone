import styled from "styled-components";
import PostFooterHeader from "./PostFooterHeader";
import PostFooterMediacontrols from "./PostFooterMediaControls";

const PostFooterContainer = styled.div`
  border: 2px red dotted;
  height: 50px;
`;

export default function PostFooterComponent() {
  return (
    <>
      <PostFooterContainer data-cy="footercontainer">
        <PostFooterHeader></PostFooterHeader>
        <PostFooterMediacontrols></PostFooterMediacontrols>
      </PostFooterContainer>
    </>
  );
}

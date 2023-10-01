import styled from "styled-components";
import PostContent from "./PostContent/PostContent";
import PostHeader from "./PostHeader/PostHeaderContainer";
import PostFooter from "./PostFooter/PostFooterContainer";
const PostContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  box-shadow: 1px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 2px dotted red;
`;
interface PostContainerType {
  images: string[];
}
export default function PostContainerComponent() {
  return (
    <>
      <PostContainer>
        <PostHeader></PostHeader>
        <PostContent></PostContent>
        <PostFooter></PostFooter>
      </PostContainer>
    </>
  );
}

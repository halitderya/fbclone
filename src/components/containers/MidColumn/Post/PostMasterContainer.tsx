import styled from "styled-components";
import PostContent from "./PostContent/PostContent";
import PostHeader from "./PostHeader/PostHeaderContainer";
import PostFooter from "./PostFooter/PostFooterContainer";
import { Post } from "../../../../../public/FakeAPI/Post/Type";

const PostContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.2);

  margin-top: 10px;
  margin-bottom: 20px;
`;

export default function PostContainerComponent(props: { post: Post }) {
  return (
    <>
      <PostContainer>
        <PostHeader {...props.post.PostHeaderProps} />
        <PostContent {...props.post.PostContentProps}></PostContent>
        <PostFooter {...props.post.PostFooterProps}></PostFooter>
      </PostContainer>
    </>
  );
}

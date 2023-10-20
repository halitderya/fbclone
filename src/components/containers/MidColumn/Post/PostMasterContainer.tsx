import styled from "styled-components";
import PostContent from "./PostContent/PostContent";
import PostHeader from "./PostHeader/PostHeaderContainer";
import PostFooter, { IPostFooterProps } from "./PostFooter/PostFooterContainer";
import { Post } from "../../../../../public/FakeAPI/Post/Type";

const PostContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  box-shadow: 1px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default function PostContainerComponent(props: { post: Post }) {
  return (
    <>
      <PostContainer>
        <PostHeader
          PostHeaderProps={{
            PostHeaderText: props.post.PostHeader,
            username: props.post.Poster.username,
            userpp: props.post.Poster.userpp,
            PostDate: props.post.Poster.PostDate,
          }}
        />
        <PostContent postimagepath={props.post.PostImage}></PostContent>
        <PostFooter></PostFooter>
      </PostContainer>
    </>
  );
}

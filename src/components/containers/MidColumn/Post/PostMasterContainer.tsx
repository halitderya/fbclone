import styled from "styled-components";
import PostContent from "./PostContent/PostContent";
import PostHeader from "./PostHeader/PostHeaderContainer";
import PostFooter from "./PostFooter/PostFooterContainer";
import { SinglePost } from "../../../../../public/FakeAPI/Post/Type";

const PostContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  box-shadow: 1px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 2px dotted red;
`;

export default function PostContainerComponent({ SinglePost }: SinglePost) {
  return (
    <>
      <PostContainer>
        <PostHeader
          PostHeaderProps={{
            PostHeaderText: SinglePost.PostHeader,
            username: SinglePost.Poster.username,
            userpp: SinglePost.Poster.userpp,
            PostDate: SinglePost.Poster.PostDate,
          }}
        />
        <PostContent postimagepath={SinglePost.PostImage}></PostContent>
        <PostFooter></PostFooter>
      </PostContainer>
    </>
  );
}

import styled from "styled-components";
import { PostContentProps } from "../../../../../../public/FakeAPI/Post/Type";

const PostContent = styled.div`
  background-position: center;
`;
const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

export default function PostContentComponent(props: PostContentProps) {
  return (
    <PostContent>
      <PostImage src={props.PostImage}></PostImage>
    </PostContent>
  );
}

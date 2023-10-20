import styled from "styled-components";

const PostContent = styled.div`
  background-position: center;
`;
const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

type PostContainerProps = {
  postimagepath: string;
};
export default function PostContentComponent({ postimagepath }: PostContainerProps) {
  return (
    <PostContent>
      <PostImage src={postimagepath}></PostImage>
    </PostContent>
  );
}

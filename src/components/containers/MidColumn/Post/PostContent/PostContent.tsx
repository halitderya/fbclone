import styled from "styled-components";

const PostContent = styled.div<{
  $PostImage?: string;
}>`
  background-image: url(${(props) => props.$PostImage});
  background-position: center;
`;

type PostContainerProps = {
  postimagepath: string;
};
export default function PostContentComponent({ postimagepath }: PostContainerProps) {
  return <PostContent $PostImage={postimagepath}>PostContent</PostContent>;
}

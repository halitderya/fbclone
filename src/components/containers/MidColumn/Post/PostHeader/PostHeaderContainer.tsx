import styled from "styled-components";
import PostHeaderType from "./PostHeaderType";
import PPCircle from "../../../../particles/PPCircle";

const PostHeaderComponent = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  height: 80px;
`;
const PostHeaderFirstBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-bottom: 3px;
  padding-top: 3px;
  justify-content: space-between;
`;
const PostTimeStampContainer = styled.label``;
const PostTimeStampIcon = styled.label``;
const PostTimeStamp = styled.label``;
const PostHeaderLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PostHeaderRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PostHeaderText = styled.div`
  font-weight: 200;
  font-style: normal;

  font-family: Arial, Helvetica, sans-serif;
`;
const PostHeaderControls = styled.div``;
const SeeMore = styled.button`
  border: 0;
  background-color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  color: gray;
`;

const PostExit = styled(SeeMore)``;
const PostPoster = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
`;
const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
export default function PostHeaderContainer(PostHeader: PostHeaderType) {
  return (
    <>
      <PostHeaderComponent className="headercomponent">
        <PostHeaderLeftContainer className="PostHeaderLeftContainer">
          <FirstLine className="FirstLine">
            <PPCircle ppimage={PostHeader.PostHeaderProps.userpp} />
            <PostHeaderFirstBox className="PostHeaderFirstBox">
              <PostPoster>{PostHeader.PostHeaderProps.username}</PostPoster>
              <PostTimeStampContainer>
                <PostTimeStamp>{PostHeader.PostHeaderProps.PostDate}</PostTimeStamp>
                <PostTimeStampIcon>X</PostTimeStampIcon>
              </PostTimeStampContainer>
            </PostHeaderFirstBox>
          </FirstLine>

          <PostHeaderText>{PostHeader.PostHeaderProps.PostHeaderText}</PostHeaderText>
        </PostHeaderLeftContainer>

        <PostHeaderRightContainer>
          <PostHeaderControls>
            <SeeMore>...</SeeMore>
            <PostExit>x</PostExit>
          </PostHeaderControls>
        </PostHeaderRightContainer>
      </PostHeaderComponent>
    </>
  );
}

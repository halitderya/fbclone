import styled from "styled-components";
import PPCircle from "../../../../particles/PPCircle";
import worldicon from "../../../../../assets/post-files/world-icon.svg";
import { PostHeaderProps } from "../../../../../../public/FakeAPI/Post/Type";

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
const PostTimeStampContainer = styled.div`
  display: flex;
  align-items: center;
`;
const PostTimeStampIcon = styled.div<{ $icon: string }>`
  background-image: url(${(props) => props.$icon});
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 10px;
  height: 16px;
  width: 16px;
`;
const PostTimeStamp = styled.label`
  color: ${(props) => props.theme.darkgray};
  font-family: sans-serif;

  font-size: 14px;
`;
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
function timeSince(date: string) {
  const converteddate = new Date(date).getTime();

  const seconds = Math.floor((new Date().getTime() - converteddate) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

export default function PostHeaderContainer(props: PostHeaderProps) {
  return (
    <>
      <PostHeaderComponent className="headercomponent">
        <PostHeaderLeftContainer className="PostHeaderLeftContainer">
          <FirstLine className="FirstLine">
            <PPCircle ppimage={props.Poster.photo} />
            <PostHeaderFirstBox className="PostHeaderFirstBox">
              <PostPoster>{props.Poster.name}</PostPoster>
              <PostTimeStampContainer>
                <PostTimeStamp>{timeSince(props.PostDate)} ago </PostTimeStamp>
                <PostTimeStampIcon className="PostTimeStampIcon" $icon={worldicon}></PostTimeStampIcon>
              </PostTimeStampContainer>
            </PostHeaderFirstBox>
          </FirstLine>

          <PostHeaderText>{props.PostHeaderText}</PostHeaderText>
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

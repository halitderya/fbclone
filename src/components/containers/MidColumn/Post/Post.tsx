import styled from "styled-components";
import { Post, PostFooterProps } from "../../../../../public/FakeAPI/Post/PostType";
import PPCircle from "../../../particles/PPCircle";
import worldicon from "../../../../assets/post-files/world-icon.svg";
import { Tooltip } from "react-tooltip";
import CalculateSince from "../../../particles/CalculateSince";

const PostMainDiv = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.2);

  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px dotted red;
`;

///PostHeader

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

////PostHeaderEnd

////PostContent

const PostContent = styled.div`
  background-position: center;
`;
const PostImage = styled.img`
  width: 100%;
  height: auto;
`;
////PostContentEnd

////PostFooterStarts

const PostFooterContainer = styled.div`
  height: 80px;
  padding: 10px;
`;
const PostFooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const PostFooterReactions = styled.div``;

const PostFooterMediaControls = styled.div`
  height: 30px;
`;

const PostFooterLine = styled.hr`
  margin-left: 20px;
  margin-right: 20px;
`;

const PostFooterCommentCount = styled.div``;
////PostFooterEnds

function PostFooterReactionsComponent() {
  return <PostFooterReactions>reactions here</PostFooterReactions>;
}

function PostFooterMediaControlComponent() {
  return <PostFooterMediaControls>FooterMediaControls</PostFooterMediaControls>;
}

function PostFooterCommentCountFC(props: { PostFooterProps: PostFooterProps }) {
  console.log(props.PostFooterProps);
  return (
    <PostFooterCommentCount className="PostFooterCommentCount">
      <a data-tooltip-id="my-tooltip-multiline" data-tooltip-html={props.PostFooterProps.Comments?.map((m) => m.Commentor.name).join("<br/>")}>
        {props.PostFooterProps.Comments?.length.toString()} Comments
      </a>
      <Tooltip id="my-tooltip-multiline"></Tooltip>
    </PostFooterCommentCount>
  );
}

export default function ComPost(props: { post: Post }) {
  return (
    <PostMainDiv>
      <PostHeaderComponent className="headercomponent">
        <PostHeaderLeftContainer className="PostHeaderLeftContainer">
          <FirstLine className="FirstLine">
            <PPCircle ppimage={props.post.PostHeaderProps.Poster.photo} />
            <PostHeaderFirstBox className="PostHeaderFirstBox">
              <PostPoster>{props.post.PostHeaderProps.Poster.name}</PostPoster>
              <PostTimeStampContainer>
                <PostTimeStamp>{CalculateSince(props.post.PostHeaderProps.PostDate)} ago </PostTimeStamp>
                <PostTimeStampIcon className="PostTimeStampIcon" $icon={worldicon}></PostTimeStampIcon>
              </PostTimeStampContainer>
            </PostHeaderFirstBox>
          </FirstLine>

          <PostHeaderText>{props.post.PostHeaderProps.PostHeaderText}</PostHeaderText>
        </PostHeaderLeftContainer>

        <PostHeaderRightContainer>
          <PostHeaderControls>
            <SeeMore>...</SeeMore>
            <PostExit>x</PostExit>
          </PostHeaderControls>
        </PostHeaderRightContainer>
      </PostHeaderComponent>
      <PostContent>
        <PostImage src={props.post.PostContentProps.PostImage}></PostImage>
      </PostContent>

      <PostFooterHeader>
        <PostFooterReactionsComponent></PostFooterReactionsComponent>
        <PostFooterCommentCountFC PostFooterProps={props.post.PostFooterProps}></PostFooterCommentCountFC>
      </PostFooterHeader>
      <PostFooterContainer>
        <PostFooterLine></PostFooterLine>
        <PostFooterMediaControlComponent></PostFooterMediaControlComponent>
      </PostFooterContainer>
    </PostMainDiv>
  );
}

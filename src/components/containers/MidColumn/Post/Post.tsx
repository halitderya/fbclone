import styled from "styled-components";
import { Post } from "../../../../../public/FakeAPI/Post/PostType";
import PPCircle from "../../../particles/PPCircle";
import worldicon from "../../../../assets/post-files/world-icon.svg";
import { Tooltip } from "react-tooltip";
import CalculateSince from "../../../particles/CalculateSince";
import { FaGrinAlt, FaHeart, FaThumbsUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

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
const iconMap = {
  1: <FaGrinAlt />,
  2: <FaHeart />,
  3: <FaThumbsUp />,
};

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

const ReactionContainer = styled.div`
  display: flex;
  justify-items: start;
  margin-left: 2px;
  margin-right: 2px;
`;
const PostFooterReactions = styled.div`
  font-size: 20px;
  pointer-events: none;
`;

const PostFooterMediaControls = styled.div`
  height: 30px;
`;

const PostFooterLine = styled.hr`
  margin-left: 20px;
  margin-right: 20px;
`;
const ReactionDialog = styled.dialog`
  display: flex;
  height: 300px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const PostFooterCommentCount = styled.div``;
////PostFooterEnds

function ReactionContainerToggle(props: { post?: Post; show: boolean; setShow: (show: boolean) => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        props.setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);

  if (!props.post || !props.show) {
    return null;
  }

  return (
    <ReactionDialog ref={dialogRef}>
      {props.post.PostHeaderText}
      {props.post.Poster.name}
    </ReactionDialog>
  );
}

function PostFooterReactionsComponent(props: { Post: Post; onToggleReaction: (show: boolean) => void }) {
  const uniqueReactions = new Set(props.Post.Reactions?.map((reaction) => reaction.Reaction));

  const reactionComponents = Array.from(uniqueReactions).map((reactionType) => (
    <PostFooterReactions className="Reaction" key={reactionType}>
      {iconMap[reactionType as keyof typeof iconMap]}
    </PostFooterReactions>
  ));

  return (
    <ReactionContainer id={props.Post.ID.toString()} onClick={() => props.onToggleReaction(true)} className="ReactionContainer">
      {reactionComponents} {props.Post.Reactions?.length}
    </ReactionContainer>
  );
}

function PostFooterCommentCountFC(props: { Post: Post }) {
  return (
    <PostFooterCommentCount className="PostFooterCommentCount">
      <a data-tooltip-id="my-tooltip-multiline" data-tooltip-html={props.Post.Comments?.map((m) => m.Commentor.name).join("<br/>")}>
        {props.Post.Comments?.length.toString()} Comments
      </a>
      <Tooltip id="my-tooltip-multiline"></Tooltip>
    </PostFooterCommentCount>
  );
}

export default function ComPost(props: { post: Post }) {
  const [showReactionDialog, setShowReactionDialog] = useState(false);

  return (
    <>
      <ReactionContainerToggle setShow={setShowReactionDialog} post={props.post} show={showReactionDialog} />
      <PostMainDiv>
        <PostHeaderComponent className="headercomponent">
          <PostHeaderLeftContainer className="PostHeaderLeftContainer">
            <FirstLine className="FirstLine">
              <PPCircle ppimage={props.post.Poster.photo} />
              <PostHeaderFirstBox className="PostHeaderFirstBox">
                <PostPoster>{props.post.Poster.name}</PostPoster>
                <PostTimeStampContainer>
                  <PostTimeStamp>{CalculateSince(props.post.PostDate)} ago </PostTimeStamp>
                  <PostTimeStampIcon className="PostTimeStampIcon" $icon={worldicon}></PostTimeStampIcon>
                </PostTimeStampContainer>
              </PostHeaderFirstBox>
            </FirstLine>

            <PostHeaderText>{props.post.PostHeaderText}</PostHeaderText>
          </PostHeaderLeftContainer>

          <PostHeaderRightContainer>
            <PostHeaderControls>
              <SeeMore>...</SeeMore>
              <PostExit>x</PostExit>
            </PostHeaderControls>
          </PostHeaderRightContainer>
        </PostHeaderComponent>
        <PostContent>
          <PostImage src={props.post.PostImage}></PostImage>
        </PostContent>

        <PostFooterHeader>
          <PostFooterReactionsComponent onToggleReaction={(show) => setShowReactionDialog(show)} Post={props.post}></PostFooterReactionsComponent>
          <PostFooterCommentCountFC Post={props.post}></PostFooterCommentCountFC>
        </PostFooterHeader>
        <PostFooterContainer>
          <PostFooterLine></PostFooterLine>
          <PostFooterMediaControls></PostFooterMediaControls>
        </PostFooterContainer>
      </PostMainDiv>
    </>
  );
}

import styled from "styled-components";
import { Post } from "../../../../../public/FakeAPI/Post/PostType";
import PPCircle from "../../../particles/PPCircle";
import worldicon from "../../../../assets/post-files/world-icon.svg";
import { Tooltip } from "react-tooltip";
import CalculateSince from "../../../particles/CalculateSince";
import { FaGrinAlt, FaHeart, FaThumbsUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import * as style from "./PostStyles";
const iconMap = {
  1: <FaGrinAlt />,
  2: <FaHeart />,
  3: <FaThumbsUp />,
};

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

  return <style.ReactionDialog ref={dialogRef}>)</style.ReactionDialog>;
}

function PostFooterReactionsComponent(props: { Post: Post; onToggleReaction: (show: boolean) => void }) {
  const uniqueReactions = new Set(props.Post.Reactions?.map((reaction) => reaction.Reaction));

  const reactionComponents = Array.from(uniqueReactions).map((reactionType) => (
    <style.PostFooterReactions className="Reaction" key={reactionType}>
      {iconMap[reactionType as keyof typeof iconMap]}
    </style.PostFooterReactions>
  ));

  return (
    <style.ReactionContainer id={props.Post.ID.toString()} onClick={() => props.onToggleReaction(true)} className="ReactionContainer">
      {reactionComponents} {props.Post.Reactions?.length}
    </style.ReactionContainer>
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
      <style.PostMainDiv>
        <style.PostHeaderComponent className="headercomponent">
          <style.PostHeaderLeftContainer className="PostHeaderLeftContainer">
            <style.FirstLine className="FirstLine">
              <PPCircle ppimage={props.post.Poster.photo} />
              <style.PostHeaderFirstBox className="PostHeaderFirstBox">
                <style.PostPoster>{props.post.Poster.name}</style.PostPoster>
                <style.PostTimeStampContainer>
                  <style.PostTimeStamp>{CalculateSince(props.post.PostDate)} ago </style.PostTimeStamp>
                  <style.PostTimeStampIcon className="PostTimeStampIcon" $icon={worldicon}></style.PostTimeStampIcon>
                </style.PostTimeStampContainer>
              </style.PostHeaderFirstBox>
            </style.FirstLine>

            <style.PostHeaderText>{props.post.PostHeaderText}</style.PostHeaderText>
          </style.PostHeaderLeftContainer>

          <style.PostHeaderRightContainer>
            <style.PostHeaderControls>
              <style.SeeMore>...</style.SeeMore>
              <style.PostExit>x</style.PostExit>
            </style.PostHeaderControls>
          </style.PostHeaderRightContainer>
        </style.PostHeaderComponent>
        <style.PostContent>
          <style.PostImage src={props.post.PostImage}></style.PostImage>
        </style.PostContent>

        <style.PostFooterHeader>
          <PostFooterReactionsComponent onToggleReaction={(show) => setShowReactionDialog(show)} Post={props.post}></PostFooterReactionsComponent>
          <PostFooterCommentCountFC Post={props.post}></PostFooterCommentCountFC>
        </style.PostFooterHeader>
        <style.PostFooterContainer>
          <style.PostFooterLine></style.PostFooterLine>
          <style.PostFooterMediaControls></style.PostFooterMediaControls>
        </style.PostFooterContainer>
      </style.PostMainDiv>
    </>
  );
}

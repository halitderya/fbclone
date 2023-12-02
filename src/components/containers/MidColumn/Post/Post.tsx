import { Post } from "../../../../../public/FakeAPI/Post/PostType";
import ReactionWindowFC, { PostFooterReactionsComponentProps, iconMap } from "./PostReactionWIndow";
import PPCircle from "../../../particles/PPCircle";
import { Tooltip } from "react-tooltip";
import CalculateSince from "../../../particles/CalculateSince";
import { useState } from "react";
import * as reactionicons from "../../../../assets/post-files/index";
import * as style from "./PostStyles";
import StringtoSvg from "./StringtoSvg";

////PostFooterEnds
function PostFooterCommentCountFC(props: { Post: Post }) {
  return (
    <style.PostFooterCommentCount className="PostFooterCommentCount">
      <style.Text $fontsize="16px">
        <a data-tooltip-id="my-tooltip-multiline" data-tooltip-html={props.Post.Comments?.map((m) => m.Commentor.name).join("<br/>")}>
          {props.Post.Comments?.length.toString()} Comments
        </a>
        <Tooltip id="my-tooltip-multiline"></Tooltip>
      </style.Text>
    </style.PostFooterCommentCount>
  );
}

function PostFooterReactionsComponent(props: PostFooterReactionsComponentProps) {
  const uniqueReactions = new Set(props.Post.Reactions?.map((reaction) => reaction.Reaction));
  const ReactionComponents = Array.from(uniqueReactions).map((reactionType) => (
    <style.PostFooterReactions className="Reaction" key={reactionType}>
      <StringtoSvg size="small" path={iconMap[reactionType as keyof typeof iconMap].toString()}></StringtoSvg>
    </style.PostFooterReactions>
  ));

  return (
    <style.ReactionContainer id={props.Post.ID.toString()} onClick={() => props.onToggleReaction(true)} className="ReactionContainer">
      {ReactionComponents} <style.Text $fontsize="16px">{props.Post.Reactions?.length}</style.Text>
    </style.ReactionContainer>
  );
}

export default function ComPost(props: { post: Post }) {
  const [showReactionDialog, setShowReactionDialog] = useState(false);

  return (
    <>
      <ReactionWindowFC post={props.post} setShow={setShowReactionDialog} show={showReactionDialog} />

      <style.PostMainDiv>
        <style.PostHeaderComponent className="headercomponent">
          <style.PostHeaderLeftContainer className="PostHeaderLeftContainer">
            <style.FirstLine className="FirstLine">
              <PPCircle ppimage={props.post.Poster.photo} />
              <style.PostHeaderFirstBox className="PostHeaderFirstBox">
                <style.PostPoster>{props.post.Poster.name}</style.PostPoster>
                <style.PostTimeStampContainer>
                  <style.PostTimeStamp>{CalculateSince(props.post.PostDate)} ago </style.PostTimeStamp>
                  <style.PostTimeStampIcon className="PostTimeStampIcon" $icon={reactionicons.worldicon}></style.PostTimeStampIcon>
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

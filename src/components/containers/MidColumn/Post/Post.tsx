import { Post } from "../../../../../public/FakeAPI/Post/PostType";
import ReactionWindowFC, { PostFooterReactionsComponentProps, iconMap } from "./PostReactionWIndow";
import PPCircle from "../../../particles/PPCircle";
import { Tooltip } from "react-tooltip";
import CalculateSince from "../../../particles/CalculateSince";
import { useState } from "react";
import * as reactionicons from "../../../../assets/post-files/index";
import * as style from "./PostStyles";
import StringtoSvg from "./StringtoSvg";
import PostModalFC from "./PostModal";
import { v1 as uuidv1 } from "uuid";
import ScrollBarToggle from "./ScrollBarToggle";
import PostMediareactionModalMainFC from "./PostMediaReactionModal";

////PostFooterEnds
interface PostFooterCommentProps {
  Post: Post;
  onToggleComment: (show: boolean) => void;
}

function PostFooterCommentCountFC(props: PostFooterCommentProps) {
  const handleClick = (set: boolean) => {
    props.onToggleComment(set);
    ScrollBarToggle();
  };

  return (
    <style.PostFooterCommentCount onClick={() => handleClick(true)} className="PostFooterCommentCount">
      <style.Text $weight={400} $colour="darkgray" $fontsize="16px">
        <a data-tooltip-id="my-tooltip-multiline" data-tooltip-html={props.Post.Comments?.map((m) => m.Commentor.name).join("<br/>")}>
          {props.Post.Comments?.length.toString()} {props.Post.Comments ? "Comments" : ""}
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
      {ReactionComponents}{" "}
      <style.Text $weight={400} $colour="darkgray" $fontsize="16px">
        {props.Post.Reactions?.length}
      </style.Text>
    </style.ReactionContainer>
  );
}

interface ComPostProps {
  post: Post;
  isModalView: boolean;
}

export default function ComPost(props: ComPostProps) {
  const [showReactionDialog, setShowReactionDialog] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPost, setShowPost] = useState<boolean>(true);
  const [showReactionModal, setshowReactionModal] = useState<boolean>(false);

  function HidePost(): void {
    setShowPost(false);
  }

  function HandleMediaLike(): void {
    setshowReactionModal(!showReactionModal);
  }

  return (
    <>
      <ReactionWindowFC post={props.post} setShow={setShowReactionDialog} show={showReactionDialog} />
      <PostModalFC Post={props.post} setShow={setShowModal} show={showModal} />
      <style.PostMainDiv $show={showPost} className={props.post.ID}>
        <style.PostHeaderComponent className="headercomponent">
          <style.PostHeaderLeftContainer className="PostHeaderLeftContainer">
            <style.FirstLine className="FirstLine">
              <PPCircle ppimage={props.post.Poster.photo} />
              <style.PostHeaderFirstBox className="PostHeaderFirstBox">
                <style.PostPoster className="PostPoster">{props.post.Poster.name}</style.PostPoster>
                <style.PostTimeStampContainer className="PostTimeStampContainer">
                  <style.PostTimeStamp className="PostTimeStamp">{CalculateSince(props.post.PostDate)} ago </style.PostTimeStamp>
                  <style.PostTimeStampIcon className="PostTimeStampIcon" $icon={reactionicons.worldicon}></style.PostTimeStampIcon>
                </style.PostTimeStampContainer>
              </style.PostHeaderFirstBox>
            </style.FirstLine>

            <style.PostHeaderText>{props.post.PostHeaderText}</style.PostHeaderText>
          </style.PostHeaderLeftContainer>

          <style.PostHeaderRightContainer>
            <style.PostHeaderControls>
              <style.PostExit onClick={HidePost}>X</style.PostExit>
            </style.PostHeaderControls>
          </style.PostHeaderRightContainer>
        </style.PostHeaderComponent>
        <style.PostContent className="PostContainer">
          <style.PostImage className="PostImage" src={props.post.PostImage}></style.PostImage>
        </style.PostContent>
        {!props.isModalView ? (
          <style.PostFooterHeader>
            <PostFooterReactionsComponent onToggleReaction={(show) => setShowReactionDialog(show)} Post={props.post} />
            <PostFooterCommentCountFC onToggleComment={(show) => setShowModal(show)} Post={props.post} />
          </style.PostFooterHeader>
        ) : null}

        <style.PostFooterContainer className="footercontainer">
          {!props.isModalView ? (
            <>
              {/* here */}
              <PostMediareactionModalMainFC setShow={setshowReactionModal} post={props.post} show={showReactionModal}></PostMediareactionModalMainFC>

              <style.PostFooterLine />
              <style.PostFooterMediaControls className="PostFooterMediaControls">
                <style.PostReactionButtonContainer onClick={HandleMediaLike} className="ReactionContainer">
                  <style.PostLikeButton id="PostLikeButton" className="ReactionContainer" />
                  <style.Text $colour="darkgray" $weight={500} $fontsize="18px">
                    Like
                  </style.Text>
                </style.PostReactionButtonContainer>
                <style.PostReactionButtonContainer className="ReactionContainer">
                  <style.PostCommentButton />
                  <style.Text $colour="darkgray" $weight={500} $fontsize="18px">
                    Comment
                  </style.Text>
                </style.PostReactionButtonContainer>
              </style.PostFooterMediaControls>
            </>
          ) : (
            <div className="comments-wrapper">
              {props.post.Comments?.map((comment) => {
                return (
                  <style.CommentContainer className="commentcontainer" key={uuidv1()}>
                    <PPCircle ppimage={comment.Commentor.photo}></PPCircle>

                    <style.CommentBubble>
                      <style.Text $weight={800} $colour="darkgray" $fontsize="18px">
                        {comment.Commentor.name}
                      </style.Text>

                      <style.Text $weight={200} $colour="darkgray" $fontsize="16px">
                        {comment.CommentText}
                      </style.Text>
                    </style.CommentBubble>
                  </style.CommentContainer>
                );
              })}
            </div>
          )}
        </style.PostFooterContainer>
      </style.PostMainDiv>
    </>
  );
}

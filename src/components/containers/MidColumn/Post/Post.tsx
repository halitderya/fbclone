import { Post, Reaction } from "../../../../../public/FakeAPI/Post/PostType";
import PPCircle from "../../../particles/PPCircle";
import { Tooltip } from "react-tooltip";
import CalculateSince from "../../../particles/CalculateSince";
import { useEffect, useRef, useState } from "react";
import { v1 as uuidv1 } from "uuid";
import * as reactionicons from "../../../../assets/post-files/index";
import * as style from "./PostStyles";
import StringtoSvg from "./StringtoSvg";
const iconMap = {
  1: reactionicons.like,
  2: reactionicons.angry,
  3: reactionicons.care,
  4: reactionicons.love,
};

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
interface ReactionWindowFCProps {
  post?: Post;
  show: boolean;
  setShow: (show: boolean) => void;
}
interface PostFooterReactionsComponentProps {
  Post: Post;
  onToggleReaction: (show: boolean) => void;
}

//////////////WINDOW///////////////////

function ReactionWindowFC(props: ReactionWindowFCProps) {
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

  function countReactions(reactions: Reaction[]): { [key: number]: number } {
    const counts: { [key: number]: number } = {};

    for (const reaction of reactions) {
      if (counts[reaction.Reaction]) {
        counts[reaction.Reaction]++;
      } else {
        counts[reaction.Reaction] = 1;
      }
    }

    return counts;
  }

  const whats = countReactions(props.post.Reactions!);

  const uniquereactions = Array.from(new Set(props.post.Reactions?.map((reaction) => reaction.Reaction)));

  return (
    <style.ReactionWindow ref={dialogRef}>
      {/* Header here */}
      <style.ReactionWindowHeader>
        {uniquereactions.map((x) => (
          <style.ReactionContainer className="Reaction" key={uuidv1()}>
            <StringtoSvg size="big" path={iconMap[x as keyof typeof iconMap].toString()}></StringtoSvg>
            <style.Text $fontsize="20px">{whats[x]}</style.Text>
          </style.ReactionContainer>
        ))}
      </style.ReactionWindowHeader>
      {/* Header here */}

      {props.post.Reactions?.map((x) => (
        <style.ReactionLineContainer key={uuidv1()}>
          <style.Reaction>
            <StringtoSvg size="small" path={iconMap[x.Reaction as keyof typeof iconMap].toString()}></StringtoSvg>
          </style.Reaction>
          <style.Reactor>{x.Reactor.name}</style.Reactor>
          <style.AddFriend>Add Friend</style.AddFriend>
        </style.ReactionLineContainer>
      ))}
    </style.ReactionWindow>
  );
}
//////////////WINDOW ENDS ///////////////////

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

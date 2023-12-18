import { Post, Reaction } from "../../../../../public/FakeAPI/Post/PostType";
import PPCircle from "../../../particles/PPCircle";
import { useEffect, useRef } from "react";
import { v1 as uuidv1 } from "uuid";
import * as reactionicons from "../../../../assets/post-files/index";
import * as style from "./PostStyles";
import StringtoSvg from "./StringtoSvg";
export const iconMap = {
  1: reactionicons.like,
  2: reactionicons.angry,
  3: reactionicons.care,
  4: reactionicons.love,
};

interface ReactionWindowFCProps {
  post?: Post;
  show: boolean;
  setShow: (show: boolean) => void;
}
export interface PostFooterReactionsComponentProps {
  Post: Post;
  onToggleReaction: (show: boolean) => void;
}

export default function ReactionWindowFC(props: ReactionWindowFCProps) {
  const reactiondialogRef = useRef<HTMLDialogElement>(null);

  console.log("ReactionWindowFC called");
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (reactiondialogRef.current && !reactiondialogRef.current.contains(event.target as Node)) {
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

  interface AvatarwithReactionProps {
    pppath: string;
    reactionpath: string;
  }
  const AvatarwithReaction = (props: AvatarwithReactionProps) => {
    return (
      <style.AvatarwithReactionContainer>
        <PPCircle ppimage={props.pppath}></PPCircle>
        <style.StringtoSvgOverlay $icon={props.reactionpath}></style.StringtoSvgOverlay>
      </style.AvatarwithReactionContainer>
    );
  };

  return (
    <style.ReactionWindow $show={props.show} className="ReactionWindow" ref={reactiondialogRef}>
      {/* Header here */}
      <style.ReactionWindowHeader>
        {uniquereactions.map((x) => (
          <style.ReactionContainer className="Reaction" key={uuidv1()}>
            <StringtoSvg size="big" path={iconMap[x as keyof typeof iconMap].toString()}></StringtoSvg>
            <style.Text $colour="darkgray" $weight={400} $fontsize="20px">
              {whats[x]}
            </style.Text>
          </style.ReactionContainer>
        ))}
      </style.ReactionWindowHeader>
      {/* Header here */}
      <style.ReactionWindowSeperator />

      {props.post.Reactions?.map((x) => (
        <style.ReactionLineContainer key={uuidv1()}>
          <style.Reaction>
            <AvatarwithReaction pppath={x.Reactor.photo} reactionpath={iconMap[x.Reaction as keyof typeof iconMap].toString()}></AvatarwithReaction>
          </style.Reaction>
          <style.Reactor>{x.Reactor.name}</style.Reactor>
          <style.AddFriend>Add Friend</style.AddFriend>
        </style.ReactionLineContainer>
      ))}
    </style.ReactionWindow>
  );
}

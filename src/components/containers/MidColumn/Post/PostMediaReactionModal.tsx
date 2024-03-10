import styled from "styled-components";
import * as style from "./PostStyles";
import { SyntheticEvent, useEffect, useRef } from "react";
import { theme } from "../../../../assets/theme";
import { Reaction as ReactionType, Post, User } from "../../../../types/PostType";
import { auth } from "../../../../Auth/firebase";
import { capitalizeFirstLetter } from "../../../particles/CapitalizeFirstLetter";

const PostMediareactionModalMain = styled.div<{ $show: boolean }>`
  padding: 10px;
  border-radius: 5px;
  background-color: ${theme.white};
  height: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

  overflow: hidden;
  z-index: 10;
  position: absolute;
  bottom: 50px;
  left: 0px;
  display: ${(props) => (props.$show ? "block" : "none")};
`;
export const iconMap = {
  like: 1,
  angry: 2,
  care: 3,
  love: 4,
};
export default function PostMediareactionModalMainFC(props: { show: boolean; setShow: React.Dispatch<React.SetStateAction<boolean>>; post: Post }) {
  const ModalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutsideComment(event: MouseEvent) {
      if (props.show && ModalRef.current && !ModalRef.current.contains(event.target as Node)) {
        props.setShow(false);
      }
    }

    window.addEventListener("mousedown", handleClickOutsideComment);

    return () => {
      window.removeEventListener("mousedown", handleClickOutsideComment);
    };
  }, [props.show]);

  const currentuser = auth.currentUser;

  const ReactedUser: User = {
    name: capitalizeFirstLetter(currentuser?.displayName) || "User Name",
    photo: currentuser?.photoURL || "",
  };

  function handleClick(event: SyntheticEvent, post: Post): void {
    const ReactionToAdd: ReactionType = {
      Reaction: iconMap[(event.target as HTMLButtonElement).id as keyof typeof iconMap],
      Reactor: ReactedUser,
    };

    const oldReactionIndex = Number(post.Reactions?.findIndex((x) => x.Reactor.name === capitalizeFirstLetter(currentuser?.displayName)));

    if (oldReactionIndex !== -1) {
      post.Reactions?.splice(oldReactionIndex, 1, ReactionToAdd);
    } else {
      post.Reactions?.push(ReactionToAdd);
    }

    props.setShow(false);
  }
  return (
    <PostMediareactionModalMain ref={ModalRef} className="PostMediareactionModalMain" $show={props.show}>
      <style.PostMediaModalReactionLikeButton
        id="like"
        onClick={(e) => {
          handleClick(e, props.post);
        }}
      />
      <style.PostMediaModalReactionLoveButton
        id="love"
        onClick={(e) => {
          handleClick(e, props.post);
        }}
      />
      <style.PostMediaModalReactionCareButton
        id="care"
        onClick={(e) => {
          handleClick(e, props.post);
        }}
      />
      <style.PostMediaModalReactionAngryButton
        id="angry"
        onClick={(e) => {
          handleClick(e, props.post);
        }}
      />
    </PostMediareactionModalMain>
  );
}

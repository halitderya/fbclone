import styled from "styled-components";
import * as style from "./PostStyles";
import { SyntheticEvent } from "react";
import { theme } from "../../../../assets/theme";
import { Reaction as ReactionType, Post, User } from "../../../../../public/FakeAPI/Post/PostType";
import { auth } from "../../../../Auth/firebase";
import { capitalizeFirstLetter } from "../../../particles/CapitalizeFirstLetter";

const PostMediareactionModalMain = styled.div<{ $show: boolean }>`
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
  background-color: ${theme.white};
  height: 30px;

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
    console.log("post", post, "Reaction To Add,", ReactionToAdd);

    props.setShow(false);
  }
  return (
    <PostMediareactionModalMain className="PostMediareactionModalMain" $show={props.show}>
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

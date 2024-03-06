import styled from "styled-components";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { theme } from "../../../../assets/theme";
import { Comment as commentType, Post, User } from "../../../../types/PostType";
import { auth } from "../../../../Auth/firebase";
import { capitalizeFirstLetter } from "../../../particles/CapitalizeFirstLetter";

const PostMediacommentModalMain = styled.div<{ $show: boolean }>`
  padding: 10px;
  width: 90%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  height: fit-content;
  max-height: 300px;
  overflow: auto;
  border-radius: 5px;
  background-color: ${theme.white};
  z-index: 10;
  position: absolute;
  bottom: 200px;
  right: 20px;
  display: ${(props) => (props.$show ? "block" : "none")};
`;
const PostMediacommentform = styled.form`
  height: fit-content;
  overflow: none;
  position: relative;
  min-height: 140px;
`;
const PostMediaCommentFormHeader = styled.div`
  height: 50px;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${theme.darkgray};
  margin-left: 2%;
  margin-right: 2%;
`;

const PostMediacommentBubble = styled.input`
  border: none;
  position: absolute;
  background-color: ${theme.lightgray};
  width: 96%;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${theme.darkgray};
  font-weight: 400;
  font-size: 16px;

  height: 60px;
`;
const PostMediacommentSubmit = styled.input`
  height: auto;
  width: 160px;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  margin-bottom: 2%;
  margin-right: 2%;
  position: absolute;
  right: 0;
  bottom: 0;
  border: none;
  color: ${theme.white};
  background-color: ${theme.skyblue};
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 16px;
`;
export default function PostMediacommentModalMainFC(props: { show: boolean; setShow: React.Dispatch<React.SetStateAction<boolean>>; post: Post }) {
  const commentDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutsideComment(event: MouseEvent) {
      if (props.show && commentDivRef.current && !commentDivRef.current.contains(event.target as Node)) {
        props.setShow(false);
      }
    }

    window.addEventListener("mousedown", handleClickOutsideComment);

    return () => {
      window.removeEventListener("mousedown", handleClickOutsideComment);
    };
  }, [props.show]);

  const [comment, setComment] = useState<string>("");
  const currentuser = auth.currentUser;

  const CommentedUser: User = {
    name: capitalizeFirstLetter(currentuser?.displayName) || "User Name",
    photo: currentuser?.photoURL || "",
  };

  function handleSubmit(e: SyntheticEvent): void {
    e.preventDefault();

    const commentToAdd: commentType = {
      Commentor: CommentedUser,
      CommentText: comment,
    };
    if (commentToAdd.CommentText !== "") props.post.Comments?.push(commentToAdd);
    props.setShow(false);
    setComment("");
  }
  function handleCommentChange(e: SyntheticEvent): void {
    const comment = (e.target as HTMLInputElement).value;

    setComment(comment);
  }

  return (
    <PostMediacommentModalMain ref={commentDivRef} className="PostMediacommentModalMain" $show={props.show}>
      <PostMediaCommentFormHeader>Add a comment</PostMediaCommentFormHeader>
      <PostMediacommentform onSubmit={handleSubmit}>
        <PostMediacommentBubble required={true} value={comment} onChange={handleCommentChange} type="input"></PostMediacommentBubble>
        <PostMediacommentSubmit value={"Post Comment"} type="submit"></PostMediacommentSubmit>
      </PostMediacommentform>
    </PostMediacommentModalMain>
  );
}

import { Post } from "../../../../../public/FakeAPI/Post/PostType";
import { useEffect, useRef } from "react";
import ComPost from "./Post";
import ScrollBarToggle from "./ScrollBarToggle";
import * as style from "./PostStyles";

export interface PostModalProps {
  Post?: Post;
  show: boolean;
  setShow: (show: boolean) => void;
}

export default function PostModalFC(props: PostModalProps) {
  const modaldialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    function handleClickOutsideComment(event: MouseEvent) {
      if (modaldialogRef.current && !modaldialogRef.current.contains(event.target as Node)) {
        props.setShow(false);
        ScrollBarToggle();
      }
    }

    document.addEventListener("mousedown", handleClickOutsideComment);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideComment);
    };
  }, [props]);

  if (!props.Post || !props.show) {
    return null;
  }
  return (
    <style.Dialog className="Dialog" ref={modaldialogRef} $show={props.show}>
      <ComPost isModalView={true} post={props.Post}></ComPost>
    </style.Dialog>
  );
}

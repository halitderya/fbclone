import styled from "styled-components";
import { Post } from "../../../../../public/FakeAPI/Post/PostType";
import { useEffect, useRef } from "react";
import ComPost from "./Post";

export interface PostModalProps {
  Post?: Post;
  show: boolean;
  setShow: (show: boolean) => void;
}
const Dialog = styled.dialog<{ $show: boolean }>`
  height: 600px;
  width: 600px;
  display: block;
  margin-top: 100px;
  border: none;
  border-radius: 10px;
`;

export default function PostModalFC(props: PostModalProps) {
  const modaldialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modaldialogRef.current && !modaldialogRef.current.contains(event.target as Node)) {
        props.setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);

  if (!props.Post || !props.show) {
    return null;
  }
  return (
    <Dialog ref={modaldialogRef} $show={props.show}>
      <ComPost
        setOverFlow={() => {
          "hidden";
        }}
        isModalView={true}
        post={props.Post}
      ></ComPost>
    </Dialog>
  );
}

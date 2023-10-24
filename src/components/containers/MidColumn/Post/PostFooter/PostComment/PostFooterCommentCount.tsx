import styled from "styled-components";
import { Comment, PostFooterProps } from "../../../../../../../public/FakeAPI/Post/Type";
import { MouseEventHandler } from "react";
import PostCommentHoverModalFC from "./PostCommentHoverModal";

const PostFooterCommentCount = styled.div``;

interface PostFooterCommentCountType {
  commentcount?: string;
}
const handleMouseOver: MouseEventHandler<HTMLDivElement> = (event) => {
  return PostCommentHoverModalFC;
};

export default function PostFooterCommentCountFC({ commentcount }: PostFooterCommentCountType) {
  return (
    <PostFooterCommentCount onMouseOver={handleMouseOver} className="PostFooterCommentCount">
      {commentcount}
    </PostFooterCommentCount>
  );
}

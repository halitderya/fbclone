import styled from "styled-components";
import { Comment } from "../../../../../../../public/FakeAPI/Post/Type";

const PostCommentHoverModal = styled.label``;

export default function PostCommentHoverModalFC(props: Comment[]) {
  return props.map((comment, index) => {
    <PostCommentHoverModal key={index}>{comment.Commentor.name}</PostCommentHoverModal>;
  });
}

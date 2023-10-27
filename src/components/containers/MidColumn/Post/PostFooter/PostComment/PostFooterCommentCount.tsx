import styled from "styled-components";
import { PostFooterProps } from "../../../../../../../public/FakeAPI/Post/PostType";
import { Tooltip } from "react-tooltip";

const PostFooterCommentCount = styled.div``;

export default function PostFooterCommentCountFC(props: { PostFooterProps: PostFooterProps }) {
  return (
    <PostFooterCommentCount onClick={props.PostFooterProps.ToggleView} className="PostFooterCommentCount">
      <a data-tooltip-id="my-tooltip-multiline" data-tooltip-html={props.PostFooterProps.Comments?.map((m) => m.Commentor.name).join("<br/>")}>
        {props.PostFooterProps.Comments?.length.toString()} Comments
      </a>
      <Tooltip id="my-tooltip-multiline"></Tooltip>
    </PostFooterCommentCount>
  );
}

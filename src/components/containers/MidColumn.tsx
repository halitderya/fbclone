import styled from "styled-components";

import StoryContainer from "./MidColumn/Story/StoryContainer";
import { useEffect, useState } from "react";
import PostsData, { Post } from "../../../public/FakeAPI/Post/PostType";
import ComPost from "./MidColumn/Post/Post";

const MidColumn = styled.div`
  width: 50%;
  border: 1px dashed blue;
`;

const ReactionDialog = styled.dialog`
  display: flex;
  height: 300px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.8);
`;

interface DialogReturnType {
  show?: boolean;
  post?: Post;
}

function DialogReturn(props: DialogReturnType) {
  console.log("DialogReturn Worked", props.show, props.post);

  if (!props?.show) {
    return null;
  }
  return <ReactionDialog>{props.post?.PostHeaderText}</ReactionDialog>;
}

const PostsCollection = () => {
  const [PagePosts, setPagePosts] = useState<PostsData>({ Posts: [] });
  const [currentPost, setCurrentPost] = useState<Post | undefined>(undefined);
  useEffect(() => {
    fetch("../../../public/FakeAPI/Post/Post.json")
      .then((res) => res.json())
      .then((data) => {
        const updatedPosts = data.Posts.map((post: Post) => ({
          ...post,
          ReactionToggleView: reactiontoggleView,
        }));
        setPagePosts({ Posts: updatedPosts });
      })
      .catch((err) => console.log(err));
  }, []);

  const reactiontoggleView = (e: MouseEvent) => {
    const postId = Number((e.target as HTMLDivElement).getAttribute("id"));
    console.log("Pageposts: ", PagePosts);
    setCurrentPost(PagePosts.Posts[postId]);
  };

  return (
    <>
      {currentPost && <DialogReturn post={currentPost} show={true} />}
      {PagePosts.Posts.map((post) => (
        <ComPost post={post} key={post.ID}></ComPost>
      ))}
    </>
  );
};

//
export default function MidColumnComponent() {
  return (
    <MidColumn className="MidColumn">
      <StoryContainer></StoryContainer>
      <PostsCollection></PostsCollection>
    </MidColumn>
  );
}

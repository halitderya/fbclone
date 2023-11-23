import styled from "styled-components";

import StoryContainer from "./MidColumn/Story/StoryContainer";
import { useEffect, useState } from "react";
import PostsData, { Post } from "../../../public/FakeAPI/Post/PostType";
import ComPost from "./MidColumn/Post/Post";

const MidColumn = styled.div`
  width: 50%;
  border: 1px dashed blue;
`;

const ReactionDialog = styled.dialog<{ $show?: boolean }>`
  display: flex;
  display: ${(props) => (props.$show ? "none" : "flex")};
  height: 300px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const PostsCollection = () => {
  const [PagePosts, setPagePosts] = useState<PostsData>({ Posts: [] });

  const [ReactionShow, setReactionShow] = useState<boolean>(false);

  useEffect(() => {
    fetch("../../../public/FakeAPI/Post/Post.json")
      .then((res) => res.json())
      .then((data) => {
        const updatedPosts = data.Posts.map((post: Post) => ({
          ...post,
          ReactionToggleView: reactiontoggleView,
        }));
        setPagePosts({ Posts: updatedPosts });
      });
  }, [PagePosts]);

  const reactiontoggleView = (e: MouseEvent) => {
    console.log("toggle triggered", (e.target as HTMLDivElement).id);
    const current = Number((e.target as HTMLDivElement).id);

    PagePosts.Posts[current].Reactions?.forEach((x) => console.log(x.Reactor.name));
    setReactionShow(!ReactionShow);

    console.log(ReactionShow);
  };
  return PagePosts.Posts.map((post) => {
    return <ComPost post={post} key={post.ID}></ComPost>;
  });
};

//
export default function MidColumnComponent() {
  return (
    <MidColumn className="MidColumn">
      <StoryContainer></StoryContainer>
      <ReactionDialog />
      <PostsCollection></PostsCollection>
    </MidColumn>
  );
}

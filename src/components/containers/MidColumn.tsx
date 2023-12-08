import styled from "styled-components";

import StoryContainer from "./MidColumn/Story/StoryContainer";
import { useEffect, useState } from "react";
import PostsData, { Post } from "../../../public/FakeAPI/Post/PostType";
import ComPost from "./MidColumn/Post/Post";

const MidColumn = styled.div<{ $overflow: string }>`
  width: 50%;
  overflow: ${(props) => props.$overflow};
  height: 100vh;
`;

//
export default function MidColumnComponent() {
  const [OverFlow, setOverFlow] = useState<string>("auto");

  const PostsCollection = () => {
    const [PagePosts, setPagePosts] = useState<PostsData>({ Posts: [] });
    useEffect(() => {
      fetch("../../../public/FakeAPI/Post/Post.json")
        .then((res) => res.json())
        .then((data) => {
          setPagePosts(data);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
      <>
        {PagePosts.Posts.map((post: Post) => (
          <ComPost setOverFlow={setOverFlow} isModalView={false} key={post.ID} post={post}></ComPost>
        ))}
      </>
    );
  };
  console.log("overflow from midcolumn: ", OverFlow);
  return (
    <MidColumn $overflow={OverFlow} className="MidColumn">
      <StoryContainer></StoryContainer>
      <PostsCollection></PostsCollection>
    </MidColumn>
  );
}

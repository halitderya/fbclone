import styled from "styled-components";
import {} from "../particles/Buttons";
import StoryContainer from "./MidColumn/Story/StoryContainer";
import { useEffect, useState } from "react";
import PostsData from "../../../public/FakeAPI/Post/PostType";
import ComPost from "./MidColumn/Post/Post";
const MidColumn = styled.div`
  width: 50%;
  border: 1px dashed blue;
`;

const PostsCollection = () => {
  const [PagePosts, setPagePosts] = useState<PostsData>({ Posts: [] });

  useEffect(() => {
    fetch("../../../public/FakeAPI/Post/Post.json")
      .then((res) => res.json())
      .then((data) => setPagePosts(data));
  }, [setPagePosts]);

  return PagePosts.Posts.map((post) => {
    return <ComPost post={post} key={post.ID}></ComPost>;
  });
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

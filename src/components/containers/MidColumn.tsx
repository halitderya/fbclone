import styled from "styled-components";
import {} from "../Buttons";
import StoryContainer from "./MidColumn/Story/StoryContainer";
import PostContainer from "./MidColumn/Post/PostMasterContainer";
import { useEffect, useState } from "react";
import PostsData from "../../../public/FakeAPI/Post/PostType";
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
    return <PostContainer post={post} key={post.ID}></PostContainer>;
  });
};

export default function MidColumnComponent() {
  return (
    <MidColumn className="MidColumn">
      <StoryContainer></StoryContainer>

      <PostsCollection></PostsCollection>
    </MidColumn>
  );
}

import styled from "styled-components";
import {} from "../Buttons";
import StoryContainer from "./MidColumn/Story/StoryContainer";
import PostContainer from "./MidColumn/Post/PostMasterContainer";
import { useEffect, useState } from "react";
import PostsData from "../../../public/FakeAPI/Post/Type";
const MidColumn = styled.div`
  width: 40%;
`;

const PostsCollection = () => {
  const [PagePosts, setPagePosts] = useState<PostsData>({ Posts: [] });
  useEffect(() => {
    fetch("../../../public/FakeAPI/Post/Post.json")
      .then((res) => res.json())
      .then((data) => {
        setPagePosts(data);
      });
  }, [setPagePosts]);

  return PagePosts.Posts.map((post) => {
    return <PostContainer post={post} key={post.ID}></PostContainer>;
  });
};

export default function MidColumnComponent() {
  return (
    <MidColumn>
      <StoryContainer></StoryContainer>

      <PostsCollection></PostsCollection>
    </MidColumn>
  );
}

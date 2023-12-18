import styled from "styled-components";

import StoryContainer from "./MidColumn/Story/StoryContainer";
import { useEffect, useState } from "react";
import PostsData, { Post } from "../../../public/FakeAPI/Post/PostType";
import ComPost from "./MidColumn/Post/Post";
const PostCreator = styled.div`
  height: 100px;
  border: 1px red solid;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const MidColumn = styled.div`
  width: 50%;
  height: 100vh;
  padding-left: 5%;
  padding-right: 5%;
  overflow: auto;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  &.no-scroll {
    overflow: hidden;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (max-width: 1080px) {
    width: 70%;
  }
  @media (max-width: 899px) {
    width: 100%;
  }
`;

//
export default function MidColumnComponent() {
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
          <ComPost isModalView={false} key={post.ID} post={post}></ComPost>
        ))}
      </>
    );
  };
  return (
    <MidColumn id="MidColumn" className="MidColumn">
      <StoryContainer></StoryContainer>
      <PostCreator></PostCreator>
      <PostsCollection></PostsCollection>
    </MidColumn>
  );
}

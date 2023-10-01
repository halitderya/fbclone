import styled from "styled-components";
import {} from "../Buttons";
import StoryContainer from "./MidColumn/Story/StoryContainer";
import PostContainer from "./MidColumn/Post/PostMasterContainer";
import { useEffect, useState } from "react";
import { PostContext } from "../../Contexts/PostContext";
const MidColumn = styled.div`
  //border: 1px dashed green;
  width: 40%;
`;

export default function MidColumnComponent() {
  const [PagePosts, setPagePosts] = useState([]);
  useEffect(() => {
    fetch("../../../public/FakeAPI/Post/Post.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPagePosts(data);
      });
  }, []);

  return (
    <MidColumn>
      <StoryContainer></StoryContainer>
      <PostContext.Provider value={{ PagePosts, setPagePosts }}>
        {PagePosts.map((post, index) => (
          <PostContainer key={index} data={post}></PostContainer>
        ))}
      </PostContext.Provider>
    </MidColumn>
  );
}

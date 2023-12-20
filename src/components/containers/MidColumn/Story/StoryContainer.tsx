import styled from "styled-components";
import { useEffect, useState } from "react";
import StoryComponent from "./Story";
import { v1 as uuidv1 } from "uuid";

const StoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 0;
  overflow-x: auto;
  flex-wrap: nowrap;
  border-radius: 10px;
`;

export interface StoryData {
  pp: string;
  username: string;
  storytext: string;
  photo: string;
}

function FetchStories() {
  const [stories, setStories] = useState<StoryData[]>([]);
  useEffect(() => {
    fetch("../../../../../public/fakeapi/story.json")
      .then((res) => res.json())
      .then((data) => {
        setStories(data.stories);
      })
      .catch((error) => {
        console.error("An error occurred while fetching the stories:", error);
      });
  }, []);

  if (stories.length === 0) {
    return <div>No stories available</div>;
  } else {
    return (
      <>
        {stories.map((item: StoryData) => (
          <StoryComponent key={uuidv1()} username={item.username} text={item.storytext} storyimage={item.photo} ppimage={item.pp} />
        ))}
      </>
    );
  }
}

export default function StoryContainerFunction() {
  return (
    <StoryContainer>
      <FetchStories />
    </StoryContainer>
  );
}

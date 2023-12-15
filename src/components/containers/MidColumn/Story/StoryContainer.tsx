import styled from "styled-components";
import { Story } from "./Story";
import { useEffect, useState } from "react";

const StoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 0;
  overflow-x: auto;
  flex-wrap: nowrap;
`;
export interface Story {
  pp: string;
  username: string;
  storytext: string;
  photo: string;
}

interface Stories {
  Stories: Story[];
}
function FetchStories() {
  const [stories, setStories] = useState<Stories>({ Stories: [] });

  useEffect(() => {
    fetch("../../../../../public/fakeapi/story.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStories({ Stories: data });
      });
  }, []);
  if (!stories || !stories.Stories || stories.Stories.length === 0) {
    console.log("no stories");
    return <div>No stories available</div>;
  }
  return (
    <>
      {stories.Stories.map((item: Story) => (
        <Story key={item.username} text={item.storytext} storyimage={item.photo} ppimage={item.pp} />
      ))}
    </>
  );
}
export default function StoryContainerFunction() {
  return (
    <StoryContainer>
      <FetchStories />
    </StoryContainer>
  );
}

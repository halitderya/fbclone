import styled from "styled-components";
import { Story } from "./Story";
import storyimage from "./storyimage.jpg";
import ppimage from "../../../../assets/shortcut-icons/user_avatar.jpg";
import { useContext } from "react";
import { UserContext } from "../../../../Contexts/UserContext";

type User = {
  name?: string;
  vegetarian?: boolean;
  birthDate?: string;
  password?: string;
  userpp?: string;
  personalData?: {
    age?: number;
  };
  postalCode?: string;
};

const StoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 0;
  overflow-x: auto;
  flex-wrap: nowrap;
`;
export default function StoryContainerFunction() {
  const loggedUser: User = useContext(UserContext);

  return (
    <StoryContainer>
      <Story text="Lorem ipsum dolor sit amet." storyimage={storyimage} />
      <Story text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, saepe?" storyimage={storyimage} ppimage={ppimage} />
      <Story text="Lorem ipsum dolor sit amet." storyimage={storyimage} ppimage={ppimage} />
      <Story text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, saepe?" storyimage={storyimage} ppimage={ppimage} />
      <Story text="Lorem ipsum dolor sit amet." storyimage={storyimage} ppimage={ppimage} />
      <Story text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, saepe?" storyimage={storyimage} ppimage={ppimage} />
      <Story text="Lorem ipsum dolor sit amet." storyimage={storyimage} ppimage={ppimage} />
      <Story text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, saepe?" storyimage={storyimage} ppimage={ppimage} />
    </StoryContainer>
  );
}

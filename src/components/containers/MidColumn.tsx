import styled from "styled-components";

import StoryContainer from "./MidColumn/Story/StoryContainer";
import { useEffect, useState } from "react";
import PostsData, { Post } from "../../../public/FakeAPI/Post/PostType";
import ComPost from "./MidColumn/Post/Post";
import { auth } from "../../Auth/firebase";
import { v1 as uuidv1 } from "uuid";
import { capitalizeFirstLetter } from "../particles/CapitalizeFirstLetter";
import PPCircle from "../particles/PPCircle";
import { theme } from "../../assets/theme";
import imgupload from "../../assets/midcolumn-icons/img-upload.png";

const PostCreator = styled.div`
  height: 120px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${(props) => props.theme.white};
  width: 100%;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const PostCreatorInput = styled.input`
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${theme.darkgray};
  background-color: ${theme.lightgray};
  user-select: none;
  padding-left: 10px;
  outline: none;
  font-size: 20px;
  padding-left: 20px;

  padding-right: 5px;
`;
const PostCreatorFirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  align-items: center;
  padding-left: 5px;
  width: 100%;
  height: 50%;
`;
const PostCreatorSecondRow = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  justify-content: space-between;
  height: 50%;

  align-items: center;
`;
const PostImageUploadLabel = styled.label`
  background-color: #ffffff;
  border-radius: 5px;
  color: ${theme.darkgray};
  display: inline-block;
  padding: 10px 50px;
  background-position: left center;
  background-position-x: 20px;
  background-image: url(${imgupload});
  background-repeat: no-repeat;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;

  font-size: 16px;
  font-weight: 600;

  height: auto;
  margin: 20px;

  user-select: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.lightgray};
    border: 3px solid ${theme.borderblue};
    border-radius: 10px;
  }
`;

const PostImageUploader = styled.input`
  display: none;
`;

const PostCreatorButton = styled.button`
  background-color: ${theme.skyblue};
  color: white;
  padding: 10px 50px;
  margin: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  height: auto;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.borderblue};
  }
`;

const MidColumn = styled.div`
  width: 50%;
  max-width: 800px;
  height: 90vh;
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
const PostsCollection = ({ posts }: { posts: Post[] }) => {
  // Sort posts by date in descending order (newest first)
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.PostDate).getTime() - new Date(a.PostDate).getTime();
  });

  return (
    <>
      {sortedPosts.map((post: Post) => (
        <ComPost isModalView={false} key={post.ID} post={post}></ComPost>
      ))}
    </>
  );
};

export default function MidColumnComponent() {
  const [PagePosts, setPagePosts] = useState<PostsData>({ Posts: [] });
  const [addPosttext, setAddPosttext] = useState<string>("");
  const [addPostURL, setaddPostURL] = useState<string>("");
  const currentuser = auth.currentUser;

  useEffect(() => {
    fetch("../../../public/FakeAPI/Post/Post.json")
      .then((res) => res.json())
      .then((data) => {
        setPagePosts(data);
      })
      .catch((err) => console.log(err));
  }, [setPagePosts]);

  const AddPost = () => {
    const GeneratedID: string = uuidv1();
    const newPost: Post = {
      ID: GeneratedID,
      Poster: {
        name: capitalizeFirstLetter(currentuser?.displayName) ?? "",
        photo: currentuser?.photoURL ?? "",
      },
      PostHeaderText: addPosttext,
      PostDate: new Date().toString(),
      PostImage: new URL(addPostURL).toString(),
      PostFooterText: "",
    };
    setPagePosts((prevState) => ({
      Posts: [...prevState.Posts, newPost],
    }));
    setAddPosttext("");
    setaddPostURL("");
  };

  return (
    <MidColumn id="MidColumn" className="MidColumn">
      <StoryContainer></StoryContainer>
      <PostCreator>
        <PostCreatorFirstRow>
          <PPCircle ppimage={currentuser?.photoURL ?? ""} />
          <PostCreatorInput
            value={addPosttext}
            onChange={(e) => {
              setAddPosttext(e.target.value);
            }}
            placeholder={"What's on your mind " + capitalizeFirstLetter(currentuser?.displayName?.split(" ")[0]) + "?"}
          ></PostCreatorInput>
        </PostCreatorFirstRow>
        <PostCreatorSecondRow>
          <PostImageUploadLabel className="PostImageUploadLabel" htmlFor="file-upload">
            Upload Image
          </PostImageUploadLabel>
          <PostImageUploader
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                const fileUrl = URL.createObjectURL(file);
                setaddPostURL(fileUrl);
              }
            }}
            id="file-upload"
            className="PostImageUploader"
            type="file"
            accept="image/*"
          ></PostImageUploader>
          <PostCreatorButton onClick={AddPost}>Post</PostCreatorButton>
        </PostCreatorSecondRow>
      </PostCreator>
      <PostsCollection posts={PagePosts.Posts} />
    </MidColumn>
  );
}

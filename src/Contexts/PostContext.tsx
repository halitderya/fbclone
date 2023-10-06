import { Children, createContext, useEffect, useState } from "react";
import PostsData from "../../public/FakeAPI/Post/Type";

export const PostContext = createContext<PostsData>({ Posts: [] });

export const PostProvider = (props: any) => {
  const [PagePosts, setPagePosts] = useState<PostsData>({ Posts: [] });
  useEffect(() => {
    fetch("../../../public/FakeAPI/Post/Post.json")
      .then((res) => res.json())
      .then((data) => {
        setPagePosts(data);
      });
  }, [setPagePosts]);
  return <PostContext.Provider value={PagePosts}>{props.children}</PostContext.Provider>;
};

interface User{
    name:string;
    photo:string;
}

export interface Comment {
  Commentor:User;
CommentText: string;
}

interface Reaction{
    Reaction:number;
    Reactor:User;
}

export interface PostHeaderProps{
Poster:User;
PostHeaderText:string;
PostDate:string;

}


export interface Post{
    ID:number;
    Poster:User;
PostHeaderText:string;
PostDate:string;
PostImage:string;

PostFooterText:string;
Comments?:Comment[];
Reactions?:Reaction[];
}


export default interface PostsData {
    Posts: Post[];
}

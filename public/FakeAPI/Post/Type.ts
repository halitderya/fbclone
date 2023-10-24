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

export interface PostContentProps{

    PostImage:string;

}

export interface PostFooterProps{
    PostFooterText:string;
    Comments?:Comment[];
    Reactions?:Reaction[];


}

export interface Post{
    ID:number;
    PostHeaderProps:PostHeaderProps;
    PostContentProps:PostContentProps;
    PostFooterProps:PostFooterProps;
}


export default interface PostsData {
    Posts: Post[];
}

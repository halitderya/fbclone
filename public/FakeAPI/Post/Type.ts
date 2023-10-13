export interface Post {
    Poster: {
        username: string;
        userpp: string;
        PostDate: string;
    };
    ID: number;
    PostHeader: string;
    PostImage: string;
    PostFooter: {
        PostFooterText: string;
        comments?: string[];
        ShareCount: number;
    };
}

export default interface PostsData {
    Posts: Post[];
} 
export interface SinglePost{

    SinglePost:Post;
}
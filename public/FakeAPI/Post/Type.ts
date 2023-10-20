export interface Comment {
    person: {
        name: string;
        photo: string;
    };
    text: string;
}

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
        comments: Comment[];
        ShareCount: number;
    };
}
export interface PostFooter{
Footer:PostFooter
}

export default interface PostsData {
    Posts: Post[];
}

/* export interface SinglePost {
    SinglePost: Post;
} */

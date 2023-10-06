interface Post {
    Poster: {
        username: string;
        userpp: string;
        PostDate: string;
    };
    ID: string;
    PostHeader: string;
    PostImage: string;
    PostFooter: {
        PostFooterText: string;
        CommentCount: number;
        ShareCount: number;
    };
}

export default interface PostsData {
    Posts: Post[];
}

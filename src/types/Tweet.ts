export type TweetImage = {
    url: string;
    alt: string;
};

export type Tweet = {
    id: string;
    authorName: string;
    authorHandle: string;
    content: string;
    image?: TweetImage;
    createdAt: string;
    parentId?: string;
    likes: number;
    likedByMe: boolean;
};

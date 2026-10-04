import { createContext } from "react";
import type { Tweet, TweetImage } from "../types/Tweet";

export type TweetsContextValue = {
    tweets: Array<Tweet>;
    addTweet: (content: string, image?: TweetImage) => void;
    addReply: (parentId: string, content: string) => void;
    toggleLike: (id: string) => void;
};

export const TweetsContext = createContext<TweetsContextValue | undefined>(
    undefined,
);

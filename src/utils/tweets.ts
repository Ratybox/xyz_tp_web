import type { Tweet } from "../types/Tweet";

export type SortOrder = "recent" | "oldest" | "likes";

// Tweets de premier niveau (sans parentId)
export const getTopLevelTweets = (tweets: Array<Tweet>): Array<Tweet> => {
    return tweets.filter((tweet) => tweet.parentId === undefined);
}

export const getReplies = (tweets: Array<Tweet>, parentId: string): Array<Tweet> => {
    return tweets.filter((tweet) => tweet.parentId === parentId);
}

export const getTotalLikes = (tweets: Array<Tweet>): number => {
    return tweets.reduce((total, tweet) => total + tweet.likes, 0);
}

// Recherche insensible à la casse dans l'auteur, le nom d'utilisateur et le contenu
export const filterTweets = (tweets: Array<Tweet>, search: string): Array<Tweet> => {
    const query = search.trim().toLowerCase();

    if (query === "")
    {
        return tweets;
    }

    return tweets.filter((tweet) =>
        tweet.authorName.toLowerCase().includes(query)
        || tweet.authorHandle.toLowerCase().includes(query)
        || tweet.content.toLowerCase().includes(query)
    );
}

// Trie une copie du tableau : le tableau reçu n'est jamais muté
export const sortTweets = (tweets: Array<Tweet>, order: SortOrder): Array<Tweet> => {
    const copy = [...tweets];

    if (order === "likes")
    {
        return copy.sort((a, b) => b.likes - a.likes);
    }

    // Les dates ISO 8601 en UTC se comparent dans l'ordre lexicographique
    copy.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    return order === "recent" ? copy.reverse() : copy;
}

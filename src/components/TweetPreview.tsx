import { useState } from "react";
import type { Tweet } from "../types/Tweet";

const MAX_LENGTH = 180;

type TweetPreviewProps = {
    tweet: Tweet;
};

export const TweetPreview = ({ tweet }: TweetPreviewProps): React.JSX.Element => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const isLong = tweet.content.length > MAX_LENGTH;
    const displayedContent = isLong && !isExpanded ? tweet.content.slice(0, MAX_LENGTH) + "…" : tweet.content;
    const date = new Date(tweet.createdAt).toLocaleString("fr-FR");

    return (
        <article className="tweet">
            <p>
                <strong>{tweet.authorName}</strong> <span className="handle">@{tweet.authorHandle}</span>
            </p>
            <p className="date">{date}</p>
            {tweet.image && <img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt} />}
            <p>{displayedContent}</p>
            {isLong && (
                <button onClick={() => setIsExpanded((previous) => !previous)}>
                    {isExpanded ? "Voir moins" : "Voir plus"}
                </button>
            )}
        </article>
    );
}

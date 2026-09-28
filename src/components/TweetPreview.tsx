import { useState } from "react";
import { Link } from "react-router-dom";
import type { Tweet } from "../types/Tweet";

const MAX_LENGTH = 180;

type TweetPreviewProps = {
    tweet: Tweet;
    linkToDetail?: boolean;
};

export const TweetPreview = ({ tweet, linkToDetail = true }: TweetPreviewProps): React.JSX.Element => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const isLong = tweet.content.length > MAX_LENGTH;
    const displayedContent = isLong && !isExpanded ? tweet.content.slice(0, MAX_LENGTH) + "…" : tweet.content;
    const date = new Date(tweet.createdAt).toLocaleString("fr-FR");

    let image = null;
    if (tweet.image)
    {
        const img = <img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt} />;
        image = linkToDetail ? <Link to={`/tweets/${tweet.id}`}>{img}</Link> : img;
    }

    return (
        <article className="tweet">
            <p>
                <strong>{tweet.authorName}</strong> <span className="handle">@{tweet.authorHandle}</span>
            </p>
            <p className="date">{date}</p>
            {image}
            <p>{displayedContent}</p>
            {isLong && (
                <button onClick={() => setIsExpanded((previous) => !previous)}>
                    {isExpanded ? "Voir moins" : "Voir plus"}
                </button>
            )}
            {linkToDetail && (
                <p>
                    <Link to={`/tweets/${tweet.id}`}>Voir la discussion</Link>
                </p>
            )}
        </article>
    );
}

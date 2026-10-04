import { useState } from "react";
import { Link } from "react-router-dom";
import type { Tweet } from "../types/Tweet";
import { Avatar } from "./Avatar";

const MAX_LENGTH = 180;

type TweetPreviewProps = {
    tweet: Tweet;
    linkToDetail?: boolean;
    onToggleLike: (id: string) => void;
};

export const TweetPreview = ({ tweet, linkToDetail = true, onToggleLike }: TweetPreviewProps): React.JSX.Element => {
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
            <div className="tweet-author">
                <Avatar name={tweet.authorName} />
                <p>
                    <Link to={`/authors/${tweet.authorHandle}`} className="author-link">
                        <strong>{tweet.authorName}</strong> <span className="handle">@{tweet.authorHandle}</span>
                    </Link>
                </p>
            </div>
            <p className="date">{date}</p>
            {image}
            <p>{displayedContent}</p>
            {isLong && (
                <button onClick={() => setIsExpanded((previous) => !previous)}>
                    {isExpanded ? "Voir moins" : "Voir plus"}
                </button>
            )}
            <p>
                <button className={tweet.likedByMe ? "like-button liked" : "like-button"} onClick={() => onToggleLike(tweet.id)}>
                    {tweet.likedByMe ? "Je n'aime plus" : "J'aime"}
                </button>{" "}
                <span className="likes">{tweet.likes} J'aime</span>
            </p>
            {linkToDetail && (
                <p>
                    <Link to={`/tweets/${tweet.id}`}>Voir la discussion</Link>
                </p>
            )}
        </article>
    );
}

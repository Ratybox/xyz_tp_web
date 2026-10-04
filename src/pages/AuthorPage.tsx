import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { TweetsList } from "../components/TweetsList";
import { TweetsContext } from "../contexts/TweetsContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const AuthorPage = (): React.JSX.Element => {
    const { handle } = useParams<{ handle: string }>();
    const { tweets, toggleLike } = useContext(TweetsContext)!;

    // Les réponses de l'auteur sont incluses
    const authorTweets = tweets.filter((tweet) => tweet.authorHandle === handle);
    const author = authorTweets.at(0);

    useDocumentTitle(author === undefined ? "Auteur introuvable" : `${author.authorName} (@${author.authorHandle})`);

    if (author === undefined)
    {
        return (
            <div>
                <p>Cet auteur n'existe pas</p>
                <Link to="/">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>{author.authorName}</h2>
            <p className="handle">@{author.authorHandle}</p>
            <p>{authorTweets.length} tweet(s)</p>
            <TweetsList tweets={authorTweets} onToggleLike={toggleLike} />
        </div>
    );
}

import { Link, useParams } from "react-router-dom";
import { TweetPreview } from "../components/TweetPreview";
import { TweetsList } from "../components/TweetsList";
import { initialTweets } from "../data/tweets";

export const TweetDetailsPage = (): React.JSX.Element => {
    const { id } = useParams<{ id: string }>();

    const tweet = initialTweets.find((tweet) => tweet.id === id);
    const replies = initialTweets.filter((tweet) => tweet.parentId === id);

    if (tweet === undefined)
    {
        return (
            <div>
                <p>Ce tweet n'existe pas</p>
                <Link to="/">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div>
            <Link to="/">← Retour au fil</Link>
            <TweetPreview tweet={tweet} linkToDetail={false} />
            <h3>Réponses</h3>
            {replies.length === 0 ? <p>Aucune réponse pour le moment.</p> : <TweetsList tweets={replies} />}
        </div>
    );
}

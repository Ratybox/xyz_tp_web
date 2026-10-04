import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { TweetForm } from "../components/TweetForm";
import { TweetPreview } from "../components/TweetPreview";
import { TweetsList } from "../components/TweetsList";
import { TweetsContext } from "../contexts/TweetsContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { getReplies } from "../utils/tweets";

export const TweetDetailsPage = (): React.JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const { tweets, addReply, toggleLike } = useContext(TweetsContext)!;

    const tweet = tweets.find((tweet) => tweet.id === id);
    const replies = id === undefined ? [] : getReplies(tweets, id);

    // Le hook est appelé avant le retour anticipé
    useDocumentTitle(tweet === undefined ? "Tweet introuvable" : `Tweet de ${tweet.authorName}`);

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
            <nav className="breadcrumb">
                <Link to="/">Accueil</Link>
                {tweet.parentId !== undefined && (
                    <>
                        {" › "}
                        <Link to={`/tweets/${tweet.parentId}`}>Tweet d'origine</Link>
                    </>
                )}
                {" › "}
                <span>Tweet de {tweet.authorName}</span>
            </nav>
            <TweetPreview tweet={tweet} linkToDetail={false} onToggleLike={toggleLike} />
            <h3>Réponses</h3>
            <TweetForm onSubmit={(content) => addReply(tweet.id, content)} submitLabel="Répondre" allowImage={false} />
            {replies.length === 0 ? <p>Aucune réponse pour le moment.</p> : <TweetsList tweets={replies} onToggleLike={toggleLike} />}
        </div>
    );
}

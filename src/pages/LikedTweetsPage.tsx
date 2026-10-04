import { useContext } from "react";
import { TweetsList } from "../components/TweetsList";
import { TweetsContext } from "../contexts/TweetsContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const LikedTweetsPage = (): React.JSX.Element => {
    const { tweets, toggleLike } = useContext(TweetsContext)!;

    useDocumentTitle("Mes J'aime");

    // Liste dérivée : recalculée à chaque rendu à partir du contexte
    const likedTweets = tweets.filter((tweet) => tweet.likedByMe);

    return (
        <div>
            <h2>Mes J'aime</h2>
            {likedTweets.length === 0
                ? <p>Vous n'aimez encore aucun tweet.</p>
                : <TweetsList tweets={likedTweets} onToggleLike={toggleLike} />}
        </div>
    );
}

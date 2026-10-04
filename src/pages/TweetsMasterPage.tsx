import { useContext, useState } from "react";
import { TweetForm } from "../components/TweetForm";
import { TweetsList } from "../components/TweetsList";
import { TweetsContext } from "../contexts/TweetsContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { filterTweets, getTopLevelTweets, getTotalLikes, sortTweets, type SortOrder } from "../utils/tweets";

export const TweetsMasterPage = (): React.JSX.Element => {
    const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;
    const [search, setSearch] = useState<string>("");
    const [order, setOrder] = useState<SortOrder>("recent");

    useDocumentTitle("Accueil");

    // Valeurs dérivées calculées pendant le rendu, sans état supplémentaire
    const topLevelTweets = getTopLevelTweets(tweets);
    const displayedTweets = sortTweets(filterTweets(topLevelTweets, search), order);

    return (
        <div>
            <h2>Fil d'actualité</h2>
            <TweetForm onSubmit={addTweet} />
            <p>
                {topLevelTweets.length} tweet(s) dans le fil · {getTotalLikes(topLevelTweets)} mention(s) J'aime au total
            </p>
            <div className="filters">
                <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Rechercher un auteur, un nom d'utilisateur ou un contenu"
                />
                <select value={order} onChange={(event) => setOrder(event.target.value as SortOrder)}>
                    <option value="recent">Du plus récent au plus ancien</option>
                    <option value="oldest">Du plus ancien au plus récent</option>
                    <option value="likes">Des plus aimés aux moins aimés</option>
                </select>
            </div>
            <p>{displayedTweets.length} résultat(s)</p>
            {displayedTweets.length === 0
                ? <p>Aucun tweet ne correspond à votre recherche.</p>
                : <TweetsList tweets={displayedTweets} onToggleLike={toggleLike} />}
        </div>
    );
}

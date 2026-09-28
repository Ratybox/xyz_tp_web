import { TweetsList } from "../components/TweetsList";
import { initialTweets } from "../data/tweets";

export const TweetsMasterPage = (): React.JSX.Element => {
    const topLevelTweets = initialTweets.filter((tweet) => tweet.parentId === undefined);

    return (
        <div>
            <h2>Fil d'actualité</h2>
            <TweetsList tweets={topLevelTweets} />
        </div>
    );
}

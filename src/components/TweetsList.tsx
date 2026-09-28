import type { Tweet } from "../types/Tweet";
import { TweetPreview } from "./TweetPreview";

type TweetsListProps = {
    tweets: Array<Tweet>;
};

export const TweetsList = ({ tweets }: TweetsListProps): React.JSX.Element => {
    return (
        <div>
            {tweets.map((tweet) => (
                <TweetPreview key={tweet.id} tweet={tweet} />
            ))}
        </div>
    );
}

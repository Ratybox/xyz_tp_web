import type { Tweet } from "../types/Tweet";
import { TweetPreview } from "./TweetPreview";

type TweetsListProps = {
    tweets: Array<Tweet>;
    onToggleLike: (id: string) => void;
};

export const TweetsList = ({ tweets, onToggleLike }: TweetsListProps): React.JSX.Element => {
    return (
        <div>
            {tweets.map((tweet) => (
                <TweetPreview key={tweet.id} tweet={tweet} onToggleLike={onToggleLike} />
            ))}
        </div>
    );
}

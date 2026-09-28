import { TweetsList } from "./components/TweetsList";
import { initialTweets } from "./data/tweets";

const App = (): React.JSX.Element => {
    return (
        <main>
            <h1>XYZ</h1>
            <TweetsList tweets={initialTweets} />
        </main>
    );
}

export default App;

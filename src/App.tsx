import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { TweetsContext, type TweetsContextValue } from "./contexts/TweetsContext";
import { initialTweets } from "./data/tweets";
import type { Tweet, TweetImage } from "./types/Tweet";

// Valeurs par défaut communes à une publication et à une réponse
const createTweet = (content: string): Tweet => {
    return {
        id: crypto.randomUUID(),
        authorName: "Vous",
        authorHandle: "vous",
        content,
        createdAt: new Date().toISOString(),
        likes: 0,
        likedByMe: false
    };
}

const App = (): React.JSX.Element => {
    const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);

    const addTweet = (content: string, image?: TweetImage): void => {
        const tweet: Tweet = image ? { ...createTweet(content), image } : createTweet(content);
        setTweets((previous) => [tweet, ...previous]);
    }

    const addReply = (parentId: string, content: string): void => {
        const reply: Tweet = { ...createTweet(content), parentId };
        setTweets((previous) => [reply, ...previous]);
    }

    const toggleLike = (id: string): void => {
        setTweets((previous) => previous.map((tweet) =>
            tweet.id === id
                ? { ...tweet, likedByMe: !tweet.likedByMe, likes: tweet.likedByMe ? tweet.likes - 1 : tweet.likes + 1 }
                : tweet
        ));
    }

    const context: TweetsContextValue = { tweets, addTweet, addReply, toggleLike };

    return (
        <main>
            <header>
                <h1>
                    <Link to="/" className="brand">
                        <img src="/logo.svg" alt="Logo de XYZ" className="logo" />
                        XYZ
                    </Link>
                </h1>
                <nav>
                    <NavLink to="/" end>Accueil</NavLink>
                    <NavLink to="/likes">J'aime</NavLink>
                    <NavLink to="/a-propos">À propos</NavLink>
                </nav>
            </header>
            <TweetsContext.Provider value={context}>
                <Outlet />
            </TweetsContext.Provider>
        </main>
    );
}

export default App;

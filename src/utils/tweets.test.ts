import { describe, expect, test } from "bun:test";
import type { Tweet } from "../types/Tweet";
import { filterTweets, getReplies, getTopLevelTweets, getTotalLikes, sortTweets } from "./tweets";

const tweets: Array<Tweet> = [
    {
        id: "1",
        authorName: "Ada Lovelace",
        authorHandle: "ada",
        content: "La machine analytique",
        createdAt: "2026-07-01T09:00:00.000Z",
        likes: 10,
        likedByMe: false
    },
    {
        id: "2",
        authorName: "Grace Hopper",
        authorHandle: "gracehopper",
        content: "Premier bug",
        createdAt: "2026-07-03T09:00:00.000Z",
        likes: 5,
        likedByMe: true
    },
    {
        id: "3",
        authorName: "Alan Turing",
        authorHandle: "turing",
        content: "Réponse à Ada",
        createdAt: "2026-07-02T09:00:00.000Z",
        parentId: "1",
        likes: 20,
        likedByMe: false
    }
];

describe("getTopLevelTweets", () => {
    test("retourne seulement les tweets sans parentId", () => {
        expect(getTopLevelTweets(tweets).map((tweet) => tweet.id)).toEqual(["1", "2"]);
    });

    test("retourne un tableau vide pour un tableau vide", () => {
        expect(getTopLevelTweets([])).toEqual([]);
    });
});

describe("getReplies", () => {
    test("retourne les réponses d'un tweet", () => {
        expect(getReplies(tweets, "1").map((tweet) => tweet.id)).toEqual(["3"]);
    });

    test("retourne un tableau vide si le tweet n'a pas de réponse", () => {
        expect(getReplies(tweets, "2")).toEqual([]);
    });
});

describe("getTotalLikes", () => {
    test("additionne les mentions J'aime", () => {
        expect(getTotalLikes(tweets)).toBe(35);
    });

    test("retourne 0 pour un tableau vide", () => {
        expect(getTotalLikes([])).toBe(0);
    });
});

describe("filterTweets", () => {
    test("recherche dans le contenu, l'auteur et le nom d'utilisateur sans tenir compte de la casse", () => {
        expect(filterTweets(tweets, "  BUG ").map((tweet) => tweet.id)).toEqual(["2"]);
        expect(filterTweets(tweets, "ada").map((tweet) => tweet.id)).toEqual(["1", "3"]);
        expect(filterTweets(tweets, "TURING").map((tweet) => tweet.id)).toEqual(["3"]);
    });

    test("retourne un tableau vide si aucun tweet ne correspond", () => {
        expect(filterTweets(tweets, "introuvable")).toEqual([]);
    });

    test("retourne tous les tweets pour une recherche vide", () => {
        expect(filterTweets(tweets, "   ")).toEqual(tweets);
    });

    test("retourne un tableau vide pour un tableau vide", () => {
        expect(filterTweets([], "ada")).toEqual([]);
    });
});

describe("sortTweets", () => {
    test("trie du plus récent au plus ancien", () => {
        expect(sortTweets(tweets, "recent").map((tweet) => tweet.id)).toEqual(["2", "3", "1"]);
    });

    test("trie du plus ancien au plus récent", () => {
        expect(sortTweets(tweets, "oldest").map((tweet) => tweet.id)).toEqual(["1", "3", "2"]);
    });

    test("trie des plus aimés aux moins aimés", () => {
        expect(sortTweets(tweets, "likes").map((tweet) => tweet.id)).toEqual(["3", "1", "2"]);
    });

    test("ne modifie pas le tableau reçu", () => {
        const original = [...tweets];
        sortTweets(tweets, "recent");
        sortTweets(tweets, "likes");
        expect(tweets).toEqual(original);
    });

    test("retourne un tableau vide pour un tableau vide", () => {
        expect(sortTweets([], "recent")).toEqual([]);
    });
});

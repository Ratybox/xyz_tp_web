import type { Tweet } from "../types/Tweet";

export const initialTweets: Array<Tweet> = [
    {
        id: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d1001",
        authorName: "Ada Lovelace",
        authorHandle: "ada",
        content: "Je viens de finir mes notes sur la machine analytique de Babbage. Je pense qu'elle pourrait faire bien plus que des calculs : composer de la musique, manipuler des symboles, et peut-être un jour aider les humains à réfléchir autrement. Personne ne me croit encore.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/500px-Ada_Lovelace_portrait.jpg",
            alt: "Portrait peint d'Ada Lovelace en robe de soirée blanche"
        },
        createdAt: "2026-07-01T09:12:00.000Z",
        likes: 42,
        likedByMe: false
    },
    {
        id: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d1002",
        authorName: "Grace Hopper",
        authorHandle: "gracehopper",
        content: "On a trouvé un vrai insecte coincé dans le Mark II. Premier bug officiellement débuggé !",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg",
            alt: "Photo officielle de Grace Hopper en uniforme de la marine américaine"
        },
        createdAt: "2026-07-02T14:30:00.000Z",
        likes: 57,
        likedByMe: true
    },
    {
        id: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d1003",
        authorName: "Alan Turing",
        authorHandle: "turing",
        content: "Une machine peut-elle penser ? Je propose plutôt un jeu : l'imitation.",
        createdAt: "2026-07-03T08:05:00.000Z",
        likes: 31,
        likedByMe: false
    },
    {
        id: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d1004",
        authorName: "Margaret Hamilton",
        authorHandle: "mhamilton",
        content: "Le code du module lunaire est prêt. On a prévu les cas d'erreur, même ceux qu'on nous disait impossibles.",
        createdAt: "2026-07-04T19:45:00.000Z",
        likes: 18,
        likedByMe: false
    },
    {
        id: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d1005",
        authorName: "Linus Torvalds",
        authorHandle: "linus",
        content: "Je fais un petit système d'exploitation, juste un hobby, rien de sérieux.",
        createdAt: "2026-07-05T11:20:00.000Z",
        likes: 25,
        likedByMe: false
    },
    {
        id: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d1006",
        authorName: "Tim Berners-Lee",
        authorHandle: "timbl",
        content: "Et si tous les documents du CERN étaient reliés par des liens ? J'appelle ça le World Wide Web.",
        createdAt: "2026-07-06T16:00:00.000Z",
        likes: 36,
        likedByMe: true
    },
    {
        id: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d1007",
        authorName: "Barbara Liskov",
        authorHandle: "liskov",
        content: "Un sous-type doit pouvoir remplacer son type parent sans rien casser. Simple, non ?",
        createdAt: "2026-07-07T10:10:00.000Z",
        likes: 12,
        likedByMe: false
    },
    {
        id: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d1008",
        authorName: "Dennis Ritchie",
        authorHandle: "dmr",
        content: "Nouveau langage terminé avec Ken. On l'a appelé C, parce qu'il vient après B.",
        createdAt: "2026-07-08T13:37:00.000Z",
        likes: 20,
        likedByMe: false
    },
    {
        id: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d1009",
        authorName: "Edsger Dijkstra",
        authorHandle: "ewd",
        content: "Le goto est nuisible. Je l'écris, je le signe.",
        createdAt: "2026-07-09T07:50:00.000Z",
        likes: 9,
        likedByMe: false
    },
    {
        id: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d1010",
        authorName: "Katherine Johnson",
        authorHandle: "kjohnson",
        content: "Trajectoire vérifiée à la main. John Glenn peut décoller.",
        createdAt: "2026-07-10T15:25:00.000Z",
        likes: 27,
        likedByMe: false
    },
    {
        id: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d2001",
        authorName: "Charles Babbage",
        authorHandle: "babbage",
        content: "Moi je te crois Ada ! Il faut juste que je finisse de construire la machine…",
        createdAt: "2026-07-01T10:00:00.000Z",
        likes: 4,
        likedByMe: false,
        parentId: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d1001"
    },
    {
        id: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d2002",
        authorName: "Alan Turing",
        authorHandle: "turing",
        content: "Je suis sûr qu'on pourra un jour faire tourner ces idées sur une vraie machine.",
        createdAt: "2026-07-01T12:30:00.000Z",
        likes: 6,
        likedByMe: false,
        parentId: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d1001"
    },
    {
        id: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d2003",
        authorName: "Ken Thompson",
        authorHandle: "ken",
        content: "Et bientôt on réécrit Unix avec !",
        createdAt: "2026-07-08T14:00:00.000Z",
        likes: 3,
        likedByMe: false,
        parentId: "0b7f3c52-1a4e-4d8b-9f21-3c6a8e5d1008"
    }
];

# Projet individuel - XYZ

Programmation Web - L3 MIASHS - 2026 / 2027

- Prénom : **Radhi**
- Nom : **Badache**
- Adresse mail universitaire : **radhi.badache6@univ-lorraine.etu**
- Groupe de TD : **G1**
- Adresse du dépôt GitHub privé : [xyz_tp_web](https://github.com/Ratybox/xyz_tp_web)

## Lancer le projet

```bash
bun install
bun run dev
```

Vérifications : `bun test`, `bun run lint`, `bun tsc --noEmit` et `bun run build`.

## TD 01

### TD 01 - Élements réalisés

- Types `Tweet` et `TweetImage` dans `src/types/Tweet.ts`.
- Jeu de données `initialTweets` dans `src/data/tweets.ts` (plus de 10 tweets, un tweet de plus de 180 caractères, deux tweets avec image).
- Composant `TweetPreview` : auteur, `@nom d'utilisateur`, date lisible, contenu et image affichée conditionnellement avec `&&`.
- Composant `TweetsList` qui utilise `.map` avec `key={tweet.id}`.
- Bouton "Voir plus / Voir moins" géré par l'état `isExpanded` et la forme fonctionnelle du setter.

### TD 01 - Bonus réalisés

- Nombre total de tweets affiché au-dessus du fil.
- Tri du plus récent au plus ancien sans muter le tableau d'origine (`sortTweets` dans `src/utils/tweets.ts`).
- Composant `Avatar` réutilisable construit à partir des initiales de l'auteur.

### TD 01 - Élements non réalisés

- Aucun.

### TD 01 - Difficultés rencontrées + Solutions appliquées

- Afficher l'image seulement quand elle existe : `tweet.image` est optionnel, donc TypeScript refuse `tweet.image.url` sans vérification. Solution : rendu conditionnel, l'image n'est construite que si `tweet.image` est défini, sinon aucune balise `img` n'est produite.
- Tronquer le contenu : `slice(0, 180)` coupe au milieu d'un mot. Solution : ajout de "…" pour indiquer que le texte continue, et bouton affiché uniquement si `content.length > 180`.
- Avertissement de clé dans la console : la clé doit être placée sur l'élément retourné par `.map` (ici `TweetPreview`), avec `tweet.id` plutôt que l'index du tableau.
- Une variable classique pour `isExpanded` ne relance pas le rendu. Solution : `useState` et la forme fonctionnelle `setIsExpanded((previous) => !previous)`.

### Nouveaux apprentissages

- Un composant est une fonction qui retourne du TSX ; les props descendent du parent vers l'enfant (`App` → `TweetsList` → `TweetPreview`).
- Typage explicite des props et du retour (`React.JSX.Element`).
- Les dates sont stockées en chaîne ISO 8601 et converties en `Date` uniquement à l'affichage.

### TD 01 - Déclaration d'usage de l'IA générative

- Usages réalisés avec Claude : explications de notions (props, `useState`, rôle de `key`) et relecture. Vérification : `bun run lint`, `bun tsc --noEmit` et `bun run build` exécutés sans erreur.

## TD 02

### TD 02 - Élements réalisés

- Installation de `react-router-dom`, `BrowserRouter` et déclaration des routes dans `src/main.tsx`.
- `App` utilisé comme layout partagé avec `<Outlet />`.
- Pages `TweetsMasterPage`, `TweetDetailsPage` et `NotFoundPage` (route `*`).
- Lien "Voir la discussion" et image cliquable avec `Link`.
- Propriété `parentId` : le fil n'affiche que les tweets de premier niveau, la page de détail affiche le tweet et ses réponses.
- Prop `linkToDetail` (vraie par défaut) pour ne pas lier le tweet principal à sa propre page.
- Message "Ce tweet n'existe pas" pour un identifiant inconnu.

### TD 02 - Bonus réalisés

- Route statique `/a-propos` (`AboutPage`).
- Liens vers l'accueil et `/a-propos` dans le header (`NavLink`).
- Fil d'Ariane sur la page de détail (avec un lien vers le tweet d'origine pour une réponse).

### TD 02 - Élements non réalisés

- Aucun.

### TD 02 - Difficultés rencontrées + Solutions appliquées

- `useParams` retourne `id` de type `string | undefined`. Solution : la recherche avec `.find` gère ce cas et le résultat `undefined` affiche "Ce tweet n'existe pas".
- Le tweet principal de la page de détail contenait un lien vers sa propre page. Solution : prop optionnelle `linkToDetail` (vraie par défaut) qui contrôle à la fois le lien textuel et le lien autour de l'image.
- Le header disparaissait d'une page à l'autre tant que les routes n'étaient pas imbriquées. Solution : routes enfants de `/` et `<Outlet />` dans `App`.

### Nouveaux apprentissages

- Différence entre SPA et site multipages : dans l'onglet Réseau, `Link` ne recharge pas le document HTML, contrairement à `<a href>`.
- Différence entre une route inconnue (`path="*"` → `NotFoundPage`) et un tweet introuvable (route valide, mais aucun tweet ne correspond à `id`).

### TD 02 - Déclaration d'usage de l'IA générative

- Usages réalisés avec Claude : explications sur React Router (`BrowserRouter`, `Outlet`, `useParams`) et relecture. Vérification : `bun run lint`, `bun tsc --noEmit` et `bun run build` exécutés sans erreur.

## TD 03

### TD 03 - Élements réalisés

- Ajout de `likes` et `likedByMe` au type `Tweet` et au jeu de données.
- État `tweets` remonté dans `App` et partagé avec `TweetsContext` (`src/contexts/TweetsContext.ts`).
- Formulaire contrôlé `TweetForm` : limite de 280 caractères, caractères restants, bouton désactivé si le contenu est vide ou trop long, `preventDefault()`, champ vidé après publication.
- `addTweet` : ajout en tête du tableau avec la forme fonctionnelle de `setTweets`.
- `toggleLike` : nouveau tableau produit avec `.map` et l'opérateur de décomposition, transmis des pages à `TweetsList` puis à `TweetPreview` via `onToggleLike`.
- Total des mentions "J'aime" du fil.
- Hook `useDocumentTitle` appelé dans chaque page (titre de la forme `Accueil | XYZ`).
- Logotype dans le header, favicon, `lang="fr"` et palette de couleurs définie avec des variables CSS.

### TD 03 - Bonus réalisés

- Message d'erreur lorsque le champ a été utilisé puis laissé vide (le bouton reste désactivé).
- Filtre du fil par nom d'auteur (inclus dans la recherche du parcours D).
- Image distante optionnelle sur un nouveau tweet : case à cocher "Ajouter une image", URL HTTPS et texte alternatif obligatoires, champs vidés quand la case est décochée.

### TD 03 - Élements non réalisés

- Le logotype fourni avec le support de TD n'était pas dans le dépôt : `public/logo.svg` et `public/favicon.svg` sont un logotype provisoire aux couleurs de la palette, à remplacer par les fichiers fournis.

### TD 03 - Difficultés rencontrées + Solutions appliquées

- Les deux pages avaient chacune leur propre lecture des données statiques, donc un "J'aime" ne pouvait pas être synchronisé. Solution : état `tweets` remonté dans `App`, leur plus proche ancêtre commun, et partagé avec `TweetsContext`.
- `useContext(TweetsContext)` peut valoir `undefined` d'après son type. Solution : assertion de non-nullité `!`, les pages étant toujours rendues sous le `Provider`.
- Sur la page de détail, `useDocumentTitle` doit être appelé avant le retour anticipé "Ce tweet n'existe pas". Solution : le titre est calculé avec une condition, mais le hook est appelé de façon inconditionnelle.
- Ne pas muter l'état : `toggleLike` produit un nouveau tableau avec `.map` et copie le tweet modifié avec l'opérateur de décomposition.

### Nouveaux apprentissages

- Remonter l'état et le partager avec `createContext` / `useContext`.
- Formulaire contrôlé (`value` + `onChange`) et `preventDefault()` à la soumission.
- `useEffect` sert à synchroniser un élément extérieur à React (`document.title`) après le rendu ; il ne sert pas à calculer des valeurs affichées.

### TD 03 - Déclaration d'usage de l'IA générative

- Vérifications : `bun run lint`, `bun tsc --noEmit` et `bun run build` exécutés sans erreur, puis test manuel dans le navigateur (publication, "J'aime" synchronisé entre les pages, titre de l'onglet).

## TD Bonus

### Parcours réalisés

- **Parcours A - Publier une réponse** : action `addReply` dans le contexte, `TweetForm` réutilisé sur la page de détail (bouton "Répondre", sans image). La réponse apparaît seulement sous le tweet concerné.
- **Parcours B - Page par auteur** : route `authors/:handle` et `AuthorPage`. Le nom de l'auteur dans `TweetPreview` est un lien vers sa page. **Choix : les réponses de l'auteur sont incluses** dans sa page. Un nom d'utilisateur inconnu affiche "Cet auteur n'existe pas" avec un lien de retour.
- **Parcours C - Tweets aimés** : route `likes` et `LikedTweetsPage`. La liste est calculée avec `.filter` (valeur dérivée, pas de nouvel état). Lien dans le header et message si la liste est vide.
- **Parcours D - Rechercher et ordonner le fil** : champ de recherche contrôlé (auteur, nom d'utilisateur, contenu, insensible à la casse, espaces ignorés) et `select` contrôlé à trois ordres. Le nombre de résultats et un message en l'absence de résultat sont affichés.
- **Parcours E - Fonctions pures et tests** : `src/utils/tweets.ts` (`getTopLevelTweets`, `getReplies`, `getTotalLikes`, `filterTweets`, `sortTweets`) et tests `bun:test` dans `src/utils/tweets.test.ts` (cas nominal, tableau vide, recherche sans résultat, tri qui ne modifie pas le tableau reçu).

### TD Bonus - Déclaration d'usage de l'IA générative

- Vérifications : `bun test` (15 tests), `bun run lint`, `bun tsc --noEmit` et `bun run build` exécutés sans erreur.

### TD Bonus - Difficultés rencontrées + Solutions appliquées

- `tsc` ne reconnaissait pas le module `bun:test`. Solution : installation de `@types/bun` et ajout de `"bun"` dans `types` de `tsconfig.app.json`.
- `.sort()` modifie le tableau sur lequel il est appelé. Solution : `sortTweets` trie une copie (`[...tweets]`), et un test vérifie que le tableau reçu n'est pas modifié.
- Les listes filtrées (recherche, auteur, mentions "J'aime") ne sont pas stockées dans un état : elles sont calculées pendant le rendu à partir du contexte, ce qui les garde synchronisées sans `useEffect`.

import { Link } from "react-router-dom";

export const NotFoundPage = (): React.JSX.Element => {
    return (
        <div>
            <h2>Page introuvable</h2>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
}

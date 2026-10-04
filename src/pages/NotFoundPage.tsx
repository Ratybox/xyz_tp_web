import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const NotFoundPage = (): React.JSX.Element => {
    useDocumentTitle("Page introuvable");

    return (
        <div>
            <h2>Page introuvable</h2>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
}

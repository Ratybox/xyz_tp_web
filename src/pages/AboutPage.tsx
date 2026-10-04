import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const AboutPage = (): React.JSX.Element => {
    useDocumentTitle("À propos");

    return (
        <div>
            <h2>À propos</h2>
            <p>
                XYZ est un réseau social fictif réalisé dans le cadre du module Programmation Web
                de la L3 MIASHS (IDMC - Université de Lorraine).
            </p>
            <p>Il est développé avec React, TypeScript, Vite et React Router.</p>
        </div>
    );
}

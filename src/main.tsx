import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { TweetsMasterPage } from "./pages/TweetsMasterPage.tsx";
import { TweetDetailsPage } from "./pages/TweetDetailsPage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";
import { AuthorPage } from "./pages/AuthorPage.tsx";
import { LikedTweetsPage } from "./pages/LikedTweetsPage.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<TweetsMasterPage />} />
                    <Route path="tweets/:id" element={<TweetDetailsPage />} />
                    <Route path="authors/:handle" element={<AuthorPage />} />
                    <Route path="likes" element={<LikedTweetsPage />} />
                    <Route path="a-propos" element={<AboutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);

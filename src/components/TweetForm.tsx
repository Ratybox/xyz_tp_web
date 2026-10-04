import { useState, type SubmitEvent } from "react";
import type { TweetImage } from "../types/Tweet";

const CONTENT_MAX_LENGTH = 280;

type TweetFormProps = {
    onSubmit: (content: string, image?: TweetImage) => void;
    submitLabel?: string;
    allowImage?: boolean;
};

const isValidHttpsUrl = (value: string): boolean => {
    try
    {
        return new URL(value).protocol === "https:";
    }
    catch
    {
        return false;
    }
}

export const TweetForm = ({ onSubmit, submitLabel = "Publier", allowImage = true }: TweetFormProps): React.JSX.Element => {
    const [content, setContent] = useState<string>("");
    const [isTouched, setIsTouched] = useState<boolean>(false);
    const [hasImage, setHasImage] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [imageAlt, setImageAlt] = useState<string>("");

    const trimmedContent = content.trim();
    const remaining = CONTENT_MAX_LENGTH - trimmedContent.length;
    const isContentValid = trimmedContent.length > 0 && trimmedContent.length <= CONTENT_MAX_LENGTH;
    const isImageValid = !hasImage || (isValidHttpsUrl(imageUrl.trim()) && imageAlt.trim().length > 0);
    const isValid = isContentValid && isImageValid;

    const handleImageToggle = (checked: boolean): void => {
        setHasImage(checked);
        // Une case décochée masque et vide les champs de l'image
        if (!checked)
        {
            setImageUrl("");
            setImageAlt("");
        }
    }

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (!isValid)
        {
            return;
        }

        const image = hasImage ? { url: imageUrl.trim(), alt: imageAlt.trim() } : undefined;
        onSubmit(trimmedContent, image);

        setContent("");
        setIsTouched(false);
        handleImageToggle(false);
    }

    return (
        <form className="tweet-form" onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(event) => {
                    setContent(event.target.value);
                    setIsTouched(true);
                }}
                placeholder="Quoi de neuf ?"
                rows={3}
            />
            <p className={remaining < 0 ? "remaining error" : "remaining"}>
                {remaining} caractère(s) restant(s)
            </p>
            {isTouched && trimmedContent.length === 0 && (
                <p className="error">Le contenu ne peut pas être vide.</p>
            )}
            {allowImage && (
                <>
                    <label>
                        <input type="checkbox" checked={hasImage} onChange={(event) => handleImageToggle(event.target.checked)} />
                        {" "}Ajouter une image
                    </label>
                    {hasImage && (
                        <div className="image-fields">
                            <input
                                type="url"
                                value={imageUrl}
                                onChange={(event) => setImageUrl(event.target.value)}
                                placeholder="URL HTTPS de l'image"
                            />
                            <input
                                type="text"
                                value={imageAlt}
                                onChange={(event) => setImageAlt(event.target.value)}
                                placeholder="Texte alternatif"
                            />
                            {!isImageValid && (
                                <p className="error">Une URL HTTPS valide et un texte alternatif sont requis.</p>
                            )}
                        </div>
                    )}
                </>
            )}
            <button type="submit" disabled={!isValid}>{submitLabel}</button>
        </form>
    );
}

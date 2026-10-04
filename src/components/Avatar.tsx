type AvatarProps = {
    name: string;
};

export const Avatar = ({ name }: AvatarProps): React.JSX.Element => {
    // Initiales des deux premiers mots du nom, par exemple "Ada Lovelace" → "AL"
    const initials = name
        .split(" ")
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join("");

    return <span className="avatar" aria-hidden="true">{initials}</span>;
}

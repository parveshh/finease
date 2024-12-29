interface TextHeroProps {
    text: string;
}
export default function TextHero({ text }: TextHeroProps) {
    return (
        <div className="text-center p-10">
            <h1 className="text-3xl font-bold">{text}</h1>
        </div>
    );
}
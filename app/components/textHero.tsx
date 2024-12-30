interface TextHeroProps {
    text: string;
}
export default function TextHero({ text }: TextHeroProps) {
    return (
        <div className="text-center p-10 bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">
            <h1 className="text-3xl font-bold">{text}</h1>
        </div>
    );
}
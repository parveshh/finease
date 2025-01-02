"use client"
interface TextHeroProps {
   children?: React.ReactNode;
}
export default function TextHero({ children }: TextHeroProps) {
    return (
        <div className="text-center p-5 bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">
            {children}
        </div>
    );
}
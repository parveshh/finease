import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
interface SlateProps {
    title: string;
    description?: string;
    content: string;
    footer: string;
    Icon: LucideIcon;
}

export default function Slate({ title, description, content, footer, Icon }: SlateProps) {
    return (
        <Card>
          <CardHeader>
            <CardTitle>
                <div className="flex flex-row gap-2 items-center">
                <Icon />
                {title}
                </div>
                </CardTitle>
        { description &&    <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>
            <p>{content}</p>
            </CardContent>
            <CardFooter>
            { footer &&    <p>{footer}</p>}
            </CardFooter>
        </Card>
    );
}
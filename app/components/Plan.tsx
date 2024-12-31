import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PlanProps {
    title: React.ReactNode;
    description: React.ReactNode;
    content: React.ReactNode;
    footer: React.ReactNode;
}

export default function Plan({ title, description, content, footer }: PlanProps) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {content}
            </CardContent>
            <CardFooter>
                {footer}
            </CardFooter>
        </Card>
    )
}
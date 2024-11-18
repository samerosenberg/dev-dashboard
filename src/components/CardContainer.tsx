import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CardSettings } from "./CardSettings";

type Props = {
    id: string;
    title: string;
    description?: string;
    content: string;
    footer?: string;
};

function CardContainer(props: Props) {
    return (
        <Card className="h-full w-full">
            <CardHeader>
                <CardTitle>
                    {props.title}
                    <CardSettings id={props.id} />
                </CardTitle>
                <CardDescription>{props.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{props.content}</p>
            </CardContent>
            <CardFooter>
                <p>{props.footer}</p>
            </CardFooter>
        </Card>
    );
}

export default CardContainer;

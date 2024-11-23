import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import CardSettings from "./CardSettings";
import { useGithubAuthListener } from "@/hooks/useGitHubAuthListener";
import { useGitHubData } from "@/hooks/useGitHubData";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { CardInfoState } from "@/store/features/cardInfoSlice";
import Loading from "./Loading";

type Props = {
    id: string;
};

function CardContainer(props: Props) {
    const cardInfo = useSelector((state: RootState) => state.cardInfo[props.id]);

    const { githubToken, error } = useGithubAuthListener();
    const {
        data: issues,
        loading: loadingIssues,
        error: errorIssues,
    } = useGitHubData(githubToken, "issues", "samerosenberg", "dev-dashboard");

    if (!cardInfo) {
        return (
            <Card className="h-full w-full">
                {" "}
                <Loading />{" "}
            </Card>
        );
    }

    // if (!githubToken) {
    //     return (
    //         <Card className="h-full w-full">
    //             {" "}
    //             <Loading />{" "}
    //         </Card>
    //     );
    // }

    // if (loadingIssues) {
    //     return (
    //         <Card className="h-full w-full">
    //             {" "}
    //             <Loading />{" "}
    //         </Card>
    //     );
    // }

    return (
        <Card className="h-full w-full">
            <CardHeader>
                <CardTitle>
                    {cardInfo.title}
                    <CardSettings id={props.id} />
                </CardTitle>
                <CardDescription>{cardInfo.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>This is where issues will go</p>
            </CardContent>
            <CardFooter>
                <p>{issues?.length ?? 0}</p>
            </CardFooter>
        </Card>
    );
}

export default CardContainer;

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import HeaderSettingsSVG from "../assets/header-settings.svg?react";
import GitHubButton from "./GitHubButton";
import JiraButton from "./JiraButton";

type Props = {};

function Settings(props: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                    <HeaderSettingsSVG className="h-[1.2rem] w-[1.2rem] " />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Settings</DialogTitle>
                    <DialogDescription>Connect new data sources here.</DialogDescription>
                </DialogHeader>
                <div className="flex gap-4">
                    <GitHubButton />
                    <JiraButton />
                </div>
                {/** add content here */}
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Settings;

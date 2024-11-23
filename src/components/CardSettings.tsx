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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import CardSettingsSVG from "../assets/card-settings.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { removeCard } from "@/store/features/cardSlice";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { updateDescription, updateTitle } from "@/store/features/cardInfoSlice";
import { DialogClose } from "@radix-ui/react-dialog";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import GitHubForm from "./GithubForm";
import JiraForm from "./JiraForm";

type Props = {
    id: string;
};

function CardSettings(props: Props) {
    const dispatch = useDispatch();
    const breakpoint = useSelector((state: RootState) => state.breakpoint.breakpoint);
    const cardInfo = useSelector((state: RootState) => state.cardInfo[props.id]);

    const [title, setTitle] = useState<string>(cardInfo.title);
    const [description, setDescription] = useState<string>(cardInfo.description);
    const [provider, setProvider] = useState<string>("");

    const providers = ["GitHub", "Jira"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "title") {
            setTitle(value);
        } else if (name === "description") {
            setDescription(value);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(updateTitle({ id: props.id, title }));
        dispatch(updateDescription({ id: props.id, description }));
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className="px-3 ml-auto cancel-drag">
                    <CardSettingsSVG className="h-4 w-4 stroke-foreground stroke-2" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Columns</DialogTitle>
                    <DialogDescription>
                        Make changes to your columns and issue types here. Click save when you're
                        done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                value={title}
                                className="col-span-3"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="description">Description</Label>
                            <Input
                                id="description"
                                name="description"
                                value={description}
                                className="col-span-3"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <Select onValueChange={(value) => setProvider(value)} value={provider}>
                        <SelectTrigger className="w-[180px] my-4">
                            <SelectValue placeholder="Select a provider" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Provider</SelectLabel>
                                {providers.map((provider) => (
                                    <SelectItem key={provider} value={provider}>
                                        {provider}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {provider === "GitHub" && <GitHubForm id={props.id} />}
                    {provider === "Jira" && <JiraForm id={props.id} />}
                    <DialogFooter>
                        <Button
                            variant="destructive"
                            onClick={() => dispatch(removeCard({ breakpoint, id: props.id }))}
                            type="button"
                        >
                            Remove card
                        </Button>
                        {/* //TODO add confirmation pupup */}
                        <DialogClose asChild>
                            <Button type="submit">Save changes</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default CardSettings;

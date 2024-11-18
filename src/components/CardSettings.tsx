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
import CardSettingsSVG from "../assets/card-settings.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { removeCard } from "@/store/features/cardSlice";

type Props = {
    id: string;
};

export function CardSettings(props: Props) {
    const dispatch = useDispatch();
    const breakpoint = useSelector((state: RootState) => state.breakpoint.breakpoint);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className="px-1 py-1 ml-auto cancel-drag">
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
                {/** add content here */}
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => dispatch(removeCard({ breakpoint, id: props.id }))}
                    >
                        Remove card
                    </Button>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

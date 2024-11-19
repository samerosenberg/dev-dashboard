import React from "react";
import HeaderSettings from "../assets/header-settings.svg?react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

type Props = {};

export default function Header({}: Props) {
    return (
        <div className="flex h-20 w-screen justify-end">
            <span className="p-1 m-5">
                <ModeToggle />
            </span>
            <Button variant="ghost" className="p-1 m-5" size="icon">
                <HeaderSettings className="h-8 w-8 stroke-foreground stroke-2" />
            </Button>
        </div>
    );
}

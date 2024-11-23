import React from "react";
import ModeToggle from "./ModeToggle";
import Settings from "./Settings";
import AddButton from "./AddButton";

type Props = {};

function Header({}: Props) {
    return (
        <div className="flex h-20 w-screen justify-end">
            <span className="p-1 ml-5 my-5 mr-auto">
                <AddButton />
            </span>
            <span className="p-1 mr-2.5 my-5">
                <ModeToggle />
            </span>
            <span className="p-1 ml-2.5 my-5 mr-5">
                <Settings />
            </span>
        </div>
    );
}

export default Header;

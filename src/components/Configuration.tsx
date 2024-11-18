import React from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "@/store/features/cardSlice";
import { RootState } from "@/store";
import { v4 as uuidv4 } from "uuid";

type Props = {};

export default function Configuration(props: Props) {
    const breakpoint = useSelector((state: RootState) => state.breakpoint.breakpoint);
    const dispatch = useDispatch();

    return (
        <div className="flex h-25 w-screen">
            <Button
                className="ml-20 my-3 cursor-pointer shadow-lg hover:border hover:border-foreground hover:border-solid"
                onClick={() =>
                    dispatch(
                        addCard({ breakpoint, layout: { i: uuidv4(), x: 0, y: 0, w: 4, h: 2 } })
                    )
                }
            >
                Add +
            </Button>
            {/* Add Layout options */}
        </div>
    );
}

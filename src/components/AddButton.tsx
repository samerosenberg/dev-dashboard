import React from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "@/store/features/cardSlice";
import { RootState } from "@/store";
import { v4 as uuidv4 } from "uuid";
import { addCardInfo } from "@/store/features/cardInfoSlice";

type Props = {};

function AddButton(props: Props) {
    const breakpoint = useSelector((state: RootState) => state.breakpoint.breakpoint);
    const dispatch = useDispatch();

    const handleAddCard = () => {
        const newId = uuidv4();
        dispatch(addCard({ breakpoint, layout: { i: newId, x: 0, y: 0, w: 4, h: 2 } }));
        dispatch(addCardInfo({ id: newId }));
    };

    return (
        <>
            <Button
                className="cursor-pointer shadow-lg hover:border hover:border-foreground hover:border-solid"
                onClick={handleAddCard}
            >
                Add +
            </Button>
            {/* Add Layout options */}
        </>
    );
}

export default AddButton;

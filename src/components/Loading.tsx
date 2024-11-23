import React from "react";
import { ring } from "ldrs";

function Loading() {
    ring.register();

    return (
        <div className="w-full h-full flex justify-center items-center">
            {" "}
            <l-ring size="40" stroke="5" speed="2" color="hsl(var(--primary))"></l-ring>
        </div>
    );
}

export default Loading;

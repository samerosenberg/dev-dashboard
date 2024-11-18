import React from "react";

type Props = {
    style?: React.CSSProperties;
    className?: string;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
    onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
    onTouchEnd?: React.TouchEventHandler<HTMLDivElement>;
    children: React.ReactNode;
};

const CustomGridItemComponent = React.forwardRef<HTMLDivElement, Props>(
    ({ style, className, onMouseDown, onMouseUp, onTouchEnd, children, ...props }: Props, ref) => {
        return (
            <div
                style={{ ...style }}
                className={className}
                ref={ref}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onTouchEnd={onTouchEnd}
            >
                {children}
            </div>
        );
    }
);

export default CustomGridItemComponent;

import CardContainer from "@/components/CardContainer";
import { Layout, Layouts, Responsive, WidthProvider } from "react-grid-layout";
import React, { useEffect, useMemo } from "react";
import CustomGridItemComponent from "@/components/CustomGridItemComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setCards } from "@/store/features/cardSlice";
import { setBreakpoint } from "@/store/features/breakpointSlice";

type Props = {};

const breakpoints = {
    lg: 1200,
    md: 996,
    sm: 768,
    xs: 480,
    xxs: 0,
};

function CardLayout(props: Props) {
    const ResponsiveGridLayout = useMemo(() => WidthProvider(Responsive), []);

    const dispatch = useDispatch();
    const breakpoint = useSelector((state: RootState) => state.breakpoint.breakpoint);
    const layouts = useSelector((state: RootState) => state.card.cards);

    const onLayoutChange = (currentLayout: Layout[], allLayouts: Layouts) => {
        dispatch(setCards(allLayouts));
    };

    const onBreakpointChange = (breakpoint: string) => {
        dispatch(setBreakpoint(breakpoint));
    };

    return (
        <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            breakpoints={breakpoints}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            onLayoutChange={onLayoutChange}
            onBreakpointChange={onBreakpointChange}
            draggableCancel=".cancel-drag"
        >
            {layouts[breakpoint].map((cardInfo) => {
                return (
                    <CustomGridItemComponent key={cardInfo.i}>
                        <CardContainer
                            id={cardInfo.i}
                            title={cardInfo.i}
                            description={cardInfo.i}
                            content="Hello World"
                        />
                    </CustomGridItemComponent>
                );
            })}
        </ResponsiveGridLayout>
    );
}

export default CardLayout;

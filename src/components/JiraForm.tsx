import { Checkbox } from "@/components/ui/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { FormEventHandler, useEffect, useState } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";
import { updateProvider } from "@/store/features/cardInfoSlice";

type Props = {
    id: string;
};

function JiraForm(props: Props) {
    const dispatch = useDispatch();
    const dataProvider = useSelector((state: RootState) => state.cardInfo[props.id].dataProvider);

    const [checkboxes, setCheckboxes] = useState([
        {
            id: "jira_tickets",
            label: "Tickets",
            checked: dataProvider.filter((dp) => dp?.type === "jira_tickets").length > 0,
        },
    ]);

    useEffect(() => {
        dispatch(
            updateProvider({
                id: props.id,
                dataProvider: checkboxes
                    .filter((checkbox) => checkbox.checked)!
                    .map((checkbox) => ({
                        type: checkbox.id,
                        repo: "",
                    })),
            })
        );
    }, [checkboxes]);

    const handleChange = (id: string, checked: CheckedState) => {
        setCheckboxes((checkboxes) =>
            checkboxes.map((checkbox) => {
                if (checkbox.id === id) {
                    return { ...checkbox, checked: checked ? true : false };
                }
                return checkbox;
            })
        );
    };

    return (
        <div className="flex flex-col m-4">
            {checkboxes.map((checkbox) => (
                <div key={checkbox.id} className="flex m-2">
                    <Checkbox
                        id={checkbox.id}
                        onCheckedChange={(checked) => handleChange(checkbox.id, checked)}
                        checked={checkbox.checked}
                    />
                    <label
                        htmlFor="terms"
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {checkbox.label}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default JiraForm;

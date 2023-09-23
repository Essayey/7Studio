import { InfoList } from "@/entities/InfoList";
import { ViewPanelTableRow } from "./ViewPanelTableRow";
import React from "react";


type ViewPanelTableRowsProps = {
    rows: InfoList,
    rowLevel: number
}

export const ViewPanelTableRows = (props: ViewPanelTableRowsProps) => {
    const { rowLevel,
        rows } = props

    return rows.map((row) => (
        <React.Fragment key={row.id}>
            <ViewPanelTableRow row={row} rowLevel={rowLevel} />
            {row.child && <ViewPanelTableRows rowLevel={rowLevel + 1} rows={row.child} />}
        </React.Fragment>
    ))
}
import React from 'react'
import { getChildLength, isDeepChild, type InfoList } from '@/entities/InfoList'
import { ViewPanelTableRow } from './ViewPanelTableRow'

import { CreateRow } from './CreateRow'

interface ViewPanelTableRowsProps {
    rows: InfoList
    rowLevel: number
    incrementChildIndex: boolean
    creatingRowParentId: number | null
    setCreatingRowParentId: (id: number | null) => void
}

export const ViewPanelTableRows = (props: ViewPanelTableRowsProps) => {
    const {
        rowLevel,
        rows,
        incrementChildIndex,
        creatingRowParentId,
        setCreatingRowParentId
    } = props

    const handleResetCreating = () => { setCreatingRowParentId(null) }

    return rows.map((row, index, array) => (
        <React.Fragment key={row.id}>
            <ViewPanelTableRow
                row={row}
                rowLevel={rowLevel}
                prevChildLenght={
                    (array[index - 1] ? getChildLength(array[index - 1]) + 1 : 1)
                    + (array[index - 1] ? (isDeepChild(array[index - 1], creatingRowParentId) ? 1 : 0) : 0)
                }
                first={incrementChildIndex ? false : index === 0}
                root={!!rowLevel}
                setCreatingRowParentId={setCreatingRowParentId}
            />
            {creatingRowParentId === row.id
                && (
                    <CreateRow
                        closeForm={handleResetCreating}
                        parentId={creatingRowParentId}
                        rowLevel={rowLevel + 1}
                    />
                )}
            {row.child && (
                <ViewPanelTableRows
                    setCreatingRowParentId={setCreatingRowParentId}
                    creatingRowParentId={creatingRowParentId}
                    rowLevel={rowLevel + 1}
                    rows={row.child}
                    incrementChildIndex={creatingRowParentId === row.id}
                />
            )}
        </React.Fragment>
    ))
}

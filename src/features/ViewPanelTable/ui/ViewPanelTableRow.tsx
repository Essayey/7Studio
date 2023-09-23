import { InfoRow, selectCurrentListId, useCreateRowMutation, useDeleteRowMutation } from "@/entities/InfoList"
import { IconButton, Td, Tr, Box, useEditable } from "@chakra-ui/react"
import { ReactComponent as RowIcon } from '@/shared/assets/icons/RowIcon.svg'
import { ReactComponent as TrashFillIcon } from '@/shared/assets/icons/TrashFillIcon.svg'
import { useState } from "react"
import { EditRow } from "./EditRow"
import { ViewRow } from "./ViewRow"
import { useHotkeys } from 'react-hotkeys-hook'
import { useSelector } from "react-redux"
import { useDetectClickOutside } from "react-detect-click-outside"
import Xarrow, { useXarrow } from "react-xarrows";


type ViewPanelTableRowProps = {
    row: InfoRow
    rowLevel: number
}

export const ViewPanelTableRow = (props: ViewPanelTableRowProps) => {
    const { row, rowLevel } = props
    const listId = useSelector(selectCurrentListId)

    const [isDeleteButtonRendering, setIsDeleteButtonRendering] = useState(false)

    const { isEditing, onEdit, onSubmit } = useEditable()
    useHotkeys('esc', onSubmit)

    const handleEdit = () => {
        onEdit()
        setIsDeleteButtonRendering(false)
    }

    const updateArrows = useXarrow()


    const [deleteRow] = useDeleteRowMutation()
    const handleDelete = () => {
        void deleteRow({ listId, rowId: row.id }).then(() =>
            setTimeout(() => {
                updateArrows()
            })
        )
    }

    const [createRow] = useCreateRowMutation()
    const handleCreate = () => {
        void createRow({ listId, parentId: row.id }).then(() =>
            setTimeout(() => {
                updateArrows()
            })
        )
    }

    const ref = useDetectClickOutside({ onTriggered: onSubmit })

    return (
        <Tr onDoubleClick={isDeleteButtonRendering ? undefined : handleEdit} ref={ref}>
            <Td
                key={row.id}
                paddingLeft={`${rowLevel * 30}px`}>
                <Box display={'flex'}>
                    <Box
                        onMouseEnter={isEditing ? undefined : () => setIsDeleteButtonRendering(true)}
                        onMouseLeave={() => setIsDeleteButtonRendering(false)}
                        display={'flex'}
                        width={'fit-content'}
                        height={'fit-content'}
                        gap={'7px'}
                        px={'3px'}
                        py={'7px'}
                        bgColor={'#414144'}
                        borderRadius={'6px'}
                        justifyContent={'space-between'}
                    >
                        <IconButton
                            id={String(row.id)}
                            onClick={handleCreate}
                            aria-label="Добавить дочерний элемент"
                            variant='link'
                            icon={<RowIcon />}
                        />
                        {
                            isDeleteButtonRendering &&
                            <IconButton
                                //   onClick={() => addChildInfoRow(row.id)}
                                aria-label="Удалить элемент"
                                variant='link'
                                icon={<TrashFillIcon />}
                                onClick={handleDelete}
                            />
                        }
                    </Box>
                    {
                        !isDeleteButtonRendering && <Box width={24} opacity={1} />

                    }
                </Box>

            </Td>
            {
                isEditing
                    ? <EditRow closeForm={onSubmit} row={row} />
                    : <ViewRow row={row} />
            }
        </Tr>
    )
}
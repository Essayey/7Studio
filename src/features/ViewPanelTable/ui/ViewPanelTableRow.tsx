import {
    IconButton, Td, Tr, Box, useEditable
} from '@chakra-ui/react'
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useSelector } from 'react-redux'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { ViewRow } from './ViewRow'
import { EditRow } from './EditRow'
import { ReactComponent as TrashFillIcon } from '@/shared/assets/icons/TrashFillIcon.svg'
import { ReactComponent as RowIcon } from '@/shared/assets/icons/RowIcon.svg'
import {
    type InfoRow, selectCurrentListId, useDeleteRowMutation
} from '@/entities/InfoList'

interface ViewPanelTableRowProps {
    prevChildLenght: number
    row: InfoRow
    rowLevel: number
    first: boolean
    root: boolean
    setCreatingRowParentId: (id: number) => void
}

export const ViewPanelTableRow = (props: ViewPanelTableRowProps) => {
    const {
        row,
        rowLevel,
        prevChildLenght,
        first,
        root,
        setCreatingRowParentId
    } = props
    const listId = useSelector(selectCurrentListId)

    const [isDeleteButtonRendering, setIsDeleteButtonRendering] = useState(false)

    const { isEditing, onEdit, onSubmit } = useEditable()
    useHotkeys('esc', onSubmit)

    const handleEdit = () => {
        onEdit()
        setIsDeleteButtonRendering(false)
    }

    const [deleteRow] = useDeleteRowMutation()
    const handleDelete = () => {
        void deleteRow({ listId, rowId: row.id })
    }

    const ref = useDetectClickOutside({ onTriggered: onSubmit })

    return (
        <>
            <Tr onDoubleClick={isDeleteButtonRendering ? undefined : handleEdit} ref={ref}>
                <Td
                    key={row.id}
                    paddingLeft={`${rowLevel * 30}px`}
                >
                    <Box
                        display="flex"
                        position="relative"
                        zIndex={1}

                        _after={root ? {
                            zIndex: 0,
                            content: '""',
                            position: 'absolute',
                            width: '7px',
                            height: first ? '53px' : `${prevChildLenght * 71}px`,
                            borderBottom: '1px solid #C6C6C6',
                            borderLeft: '1px solid #C6C6C6',
                            left: '-7px',
                            bottom: '17px'
                        } : undefined}
                    >
                        <Box
                            onMouseEnter={isEditing ? undefined : () => { setIsDeleteButtonRendering(true) }}
                            onMouseLeave={() => { setIsDeleteButtonRendering(false) }}
                            display="flex"
                            width="fit-content"
                            height="fit-content"
                            gap="7px"
                            px="3px"
                            py="7px"
                            bgColor="#414144"
                            borderRadius="6px"
                            justifyContent="space-between"
                            zIndex={1}
                            position="relative"
                        >
                            <IconButton
                                onClick={isEditing ? undefined : () => { setCreatingRowParentId(row.id) }}
                                aria-label="Добавить дочерний элемент"
                                variant="link"
                                icon={<RowIcon />}
                            />
                            {
                                isDeleteButtonRendering
                                && (
                                    <IconButton
                                        aria-label="Удалить элемент"
                                        variant="link"
                                        icon={<TrashFillIcon />}
                                        onClick={handleDelete}
                                    />
                                )
                            }
                        </Box>
                    </Box>

                </Td>
                {
                    isEditing
                        ? <EditRow closeForm={onSubmit} row={row} />
                        : <ViewRow row={row} />
                }
            </Tr>
        </>
    )
}

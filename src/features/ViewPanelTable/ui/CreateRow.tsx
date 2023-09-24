import {
    Box, Input, Td, Tr
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useHotkeys } from 'react-hotkeys-hook'
import { useSelector } from 'react-redux'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { useEffect, useState } from 'react'
import { selectCurrentListId } from '@/entities/InfoList/model/selectors/selectCurrentListId'
import { useCreateRowMutation, emptyRow } from '@/entities/InfoList'

interface CreateRowProps {
    parentId: number | null
    closeForm: () => void
    rowLevel: number
}

export const CreateRow = (props: CreateRowProps) => {
    const { parentId, closeForm, rowLevel } = props

    const [createRow] = useCreateRowMutation()
    const listId = useSelector(selectCurrentListId)

    const { handleSubmit, register, reset } = useForm({
        defaultValues: emptyRow
    })

    const onSubmit = (data: any) => {
        void createRow({ listId, parentId, row: data })
        closeForm()
        reset()
    }

    const [mounted, setMounted] = useState(true)

    useEffect(() => {
        setTimeout(() => { setMounted(false) }, 100)
    }, [])

    useHotkeys('enter', async () => { await handleSubmit(onSubmit)() })
    const ref = useDetectClickOutside({ onTriggered: closeForm, triggerKeys: ['esc'], disableClick: mounted })
    // useHotkeys('esc', closeForm)

    return (
        <Tr ref={ref}>
            <Td paddingLeft={`${rowLevel * 30}px`}>
                {
                    !!rowLevel && (
                        <Box
                            display="flex"
                            position="relative"
                            zIndex={1}
                            px="3px"
                            py="7px"
                            bgColor="#414144"
                            borderRadius="6px"
                            width="46px"
                            height="38px"

                            _after={root ? {
                                zIndex: 0,
                                content: '""',
                                position: 'absolute',
                                width: '7px',
                                height: '53px',
                                borderBottom: '1px solid #C6C6C6',
                                borderLeft: '1px solid #C6C6C6',
                                left: '-7px',
                                bottom: '17px'
                            } : null}
                        />
                    )
                }
            </Td>
            <Td>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('rowName')} autoFocus variant="text" />
                </form>
            </Td>
            <Td>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('salary')} variant="text" />
                </form>
            </Td>
            <Td>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('equipmentCosts')} variant="text" />
                </form>
            </Td>
            <Td>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('overheads')} variant="text" />
                </form>
            </Td>
            <Td>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('estimatedProfit')} variant="text" />
                </form>
            </Td>
        </Tr>
    )
}

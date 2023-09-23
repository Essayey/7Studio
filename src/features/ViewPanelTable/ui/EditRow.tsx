import { InfoRow, useUpdateRowMutation } from "@/entities/InfoList"
import { selectCurrentListId } from "@/entities/InfoList/model/selectors/selectCurrentListId"
import { Input, Td } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useHotkeys } from "react-hotkeys-hook"
import { useSelector } from "react-redux"


type EditRowProps = {
    row: InfoRow
    closeForm: () => void
}

export const EditRow = (props: EditRowProps) => {
    const { row, closeForm } = props

    const [updateRow] = useUpdateRowMutation()
    const listId = useSelector(selectCurrentListId)

    const { handleSubmit, register, reset } = useForm({
        defaultValues: row,

    })

    const onSubmit = (data: any) => {
        void updateRow({ listId, newRow: data, rowId: row.id })
        closeForm()
        reset()
    }

    useHotkeys('enter', () => handleSubmit(onSubmit)())

    return (
        <>
            <Td>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('rowName')} autoFocus variant={'text'} />
                </form>
            </Td>
            <Td>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('salary')} variant={'text'} />
                </form>
            </Td>
            <Td>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('equipmentCosts')} variant={'text'} />
                </form>
            </Td>
            <Td>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('overheads')} variant={'text'} />
                </form>
            </Td>
            <Td>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('estimatedProfit')} variant={'text'} />
                </form>
            </Td>
        </>
    )
}
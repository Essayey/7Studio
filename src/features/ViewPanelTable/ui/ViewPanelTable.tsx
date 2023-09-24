import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Text,
    Box
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useGetInfoListQuery } from '@/entities/InfoList'
import { selectCurrentListId } from '@/entities/InfoList/model/selectors/selectCurrentListId'
import { ViewPanelTableRows } from './ViewPanelTableRows'
import { CreateRow } from './CreateRow'

export const ViewPanelTable = () => {
    const listId = useSelector(selectCurrentListId)
    const { data, isLoading } = useGetInfoListQuery({ listId })

    const [creatingRowParentId, setCreatingRowParentId] = useState<number | null>(null)

    if (isLoading) return null

    return (
        <Box
            px={3}
            height="calc(100vh - 100px)"
            overflow="auto"
        >
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th width="10%">
                            <Text fontSize="sm" color="brand.secondaryText">Уровень</Text>
                        </Th>
                        <Th width="30%">
                            <Text fontSize="sm" color="brand.secondaryText">Наименование работ</Text>
                        </Th>
                        <Th width="10%">
                            <Text fontSize="sm" color="brand.secondaryText">Основная  з/п</Text>
                        </Th>
                        <Th width="10%">
                            <Text fontSize="sm" color="brand.secondaryText">Оборудование</Text>
                        </Th>
                        <Th width="10%">
                            <Text fontSize="sm" color="brand.secondaryText">Накладные расходы</Text>
                        </Th>
                        <Th width="10%">
                            <Text fontSize="sm" color="brand.secondaryText">Сметная прибыль</Text>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.length ? (
                        <ViewPanelTableRows
                            creatingRowParentId={creatingRowParentId}
                            setCreatingRowParentId={setCreatingRowParentId}
                            rows={data}
                            rowLevel={0}
                            incrementChildIndex={false}
                        />
                    )
                        : (<CreateRow closeForm={() => { }} parentId={null} rowLevel={0} />)}
                </Tbody>
            </Table>
            {/* {data && <DrawLines list={data} />} */}
        </Box>
    )
}

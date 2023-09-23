import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Text,
    Box
} from "@chakra-ui/react"
import { useGetInfoListQuery } from "@/entities/InfoList";
import { useSelector } from "react-redux";
import { selectCurrentListId } from "@/entities/InfoList/model/selectors/selectCurrentListId";
import { ViewPanelTableRows } from "./ViewPanelTableRows"
import { Xwrapper, useXarrow } from 'react-xarrows'
import { DrawLines } from "./DrawLines";
import { useResizeDetector } from 'react-resize-detector'


export const ViewPanelTable = () => {
    const listId = useSelector(selectCurrentListId)
    const { data, isLoading } = useGetInfoListQuery({ listId })
    const updateXarrow = useXarrow()

    const { ref } = useResizeDetector({ onResize: updateXarrow })

    if (isLoading) return null

    return (
        <Xwrapper>
            <Box
                ref={ref}
                px={3}
                height={'calc(100vh - 100px)'}
                overflow={'auto'}
                position={'relative'}
                onScroll={updateXarrow}
            >
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th width={'10%'}>
                                <Text fontSize={'sm'} color='brand.secondaryText'>Уровень</Text>
                            </Th>
                            <Th width={'30%'}>
                                <Text fontSize={'sm'} color='brand.secondaryText'>Наименование работ</Text>
                            </Th>
                            <Th width={'15%'}>
                                <Text fontSize={'sm'} color='brand.secondaryText'>Основная  з/п</Text>
                            </Th>
                            <Th width={'15%'}>
                                <Text fontSize={'sm'} color='brand.secondaryText'>Оборудование</Text>
                            </Th>
                            <Th width={'15%'}>
                                <Text fontSize={'sm'} color='brand.secondaryText'>Накладные расходы</Text>
                            </Th>
                            <Th width={'15%'}>
                                <Text fontSize={'sm'} color='brand.secondaryText'>Сметная прибыль</Text>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data && <ViewPanelTableRows rows={data} rowLevel={0} />}
                    </Tbody>
                </Table>
                {data && <DrawLines list={data} />}
            </Box>
        </Xwrapper>
    )
}
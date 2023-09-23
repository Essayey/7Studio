import { Td, Text } from '@chakra-ui/react'
import { type InfoRow } from '@/entities/InfoList'

interface ViewRowProps {
    row: InfoRow
}

export const ViewRow = (props: ViewRowProps) => {
    const { row } = props

    return (
        <>
            <Td>
                <Text fontSize="sm" color="brand.primaryText">
                    {row.rowName}
                </Text>
            </Td>
            <Td>
                <Text fontSize="sm" color="brand.primaryText">
                    {row.salary}
                </Text>
            </Td>
            <Td>
                <Text fontSize="sm" color="brand.primaryText">
                    {row.equipmentCosts}
                </Text>
            </Td>
            <Td>
                <Text fontSize="sm" color="brand.primaryText">
                    {row.overheads}
                </Text>
            </Td>
            <Td>
                <Text fontSize="sm" color="brand.primaryText">
                    {row.estimatedProfit}
                </Text>
            </Td>
        </>
    )
}

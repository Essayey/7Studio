import { Box } from '@chakra-ui/react'
import { ViewPanelHeader } from './ViewPanelHeader'
import { ViewPanelTable } from '@/features/ViewPanelTable'

export const ViewPanel = () => {
    return (
        <Box
            width="100%"
            height="calc(100vh - 44px)"
            minWidth={0}
        >
            <ViewPanelHeader />
            <ViewPanelTable />
        </Box>

    )
}

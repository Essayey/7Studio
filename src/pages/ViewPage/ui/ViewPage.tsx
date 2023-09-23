import { Box } from '@chakra-ui/react'
import { ViewPanel } from '@/widgets/ViewPanel'
import { ViewSidebar } from '@/widgets/ViewSidebar'

export const ViewPage = () => {
    return (
        <Box
            height="calc(100vh - 44px)"
            display="flex"
        >
            <ViewSidebar />
            <ViewPanel />
        </Box>
    )
}

import { Box } from "@chakra-ui/react"
import { ViewSidebarAccordion } from "./ViewSidebarAccordion"

export const ViewSidebar = () => {
    return (
        <Box
            height={'100%'}
            borderRight="1px solid"
            borderColor={'brand.border'}
        >
            <ViewSidebarAccordion />
        </Box>

    )
}
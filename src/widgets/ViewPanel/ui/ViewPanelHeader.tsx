import { Box, Text } from '@chakra-ui/react'

export const ViewPanelHeader = () => {
    return (
        <Box
            width="100%"
            height="44px"
            borderBottom="1px solid"
            borderColor="brand.border"
        >
            <Box
                width="fit-content"
                padding="10px"
                height="100%"
                borderRight="1px solid"
                borderColor="brand.border"
            >
                <Text fontSize="md">Строительно-монтажные работы</Text>
            </Box>
        </Box>

    )
}

import { Box, Icon, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ReactComponent as AccordionItemIcon } from '@/shared/assets/icons/AccordionItem.svg'
import { selectCurrentListId } from '@/entities/InfoList/model/selectors/selectCurrentListId'

interface ViewSidebarItemProps {
    id: number
}

export const ViewSidebarItem = (props: ViewSidebarItemProps) => {
    const { id } = props
    const currentListId = useSelector(selectCurrentListId)

    const onClick = () => {
        // Меняем текущий лист
    }

    return (
        <Box
            height="32px"
            width="100%"
            display="flex"
            alignItems="center"
            bg={id === currentListId ? '#A1A1AA' : 'inherit'}
            cursor="pointer"
            onClick={onClick}
            paddingLeft={2}
        >
            <Icon as={AccordionItemIcon} marginRight="4" />
            <Text fontSize="sm">
                Lorem, ipsum.
            </Text>
        </Box>
    )
}

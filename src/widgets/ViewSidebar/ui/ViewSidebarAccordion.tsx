import {
    Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Text
} from '@chakra-ui/react'
import { ReactComponent as AccordionIcon } from '@/shared/assets/icons/AccordionIcon.svg'
import { ViewSidebarItem } from './ViewSidebarItem'

export const ViewSidebarAccordion = () => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple width={240}>
            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        <Text fontSize="sm">
                            Название проекта
                        </Text>
                        <Text fontSize="xs">
                            Аббревиатура
                        </Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel p={0}>
                    <ViewSidebarItem id={62533} />
                    <ViewSidebarItem id={1} />
                    <ViewSidebarItem id={2} />
                    <ViewSidebarItem id={3} />
                </AccordionPanel>

            </AccordionItem>
        </Accordion>
    )
}

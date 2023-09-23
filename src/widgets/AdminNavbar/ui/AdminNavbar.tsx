import { Box, Flex, Link, Tabs, TabList, Tab, Text, Icon } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ReactComponent as GoBackIcon } from '@/shared/assets/icons/GoBackIcon.svg'
import { ReactComponent as InstrumentsIcon } from '@/shared/assets/icons/InstrumentsIcon.svg'

export const AdminNavbar = () => {
    const location = useLocation();
    const isViewTabActive = location.pathname === "/view";
    const isManagementTabActive = location.pathname === "/management";

    return (
        <Flex
            height="44px"
            alignItems="center"
            paddingLeft="10px"
            paddingRight="10px"
            justifyContent="space-between"
            borderBottom="1px solid"
            borderColor={'brand.border'}
        >
            {/* Блок с иконками */}
            <Flex gap={10} height={'100%'} alignItems={'center'}>
                <Link as={RouterLink} to="#">
                    <Flex alignItems="center">
                        <Icon as={InstrumentsIcon} boxSize={5} color={isManagementTabActive ? "white" : "gray.500"} />
                    </Flex>
                </Link>
                <Link as={RouterLink} to="#">
                    <Flex alignItems="center">
                        <Icon as={GoBackIcon} boxSize={5} color={isViewTabActive ? "white" : "gray.500"} />
                    </Flex>
                </Link>
                <Link
                    fontSize={'sm'}
                    as={RouterLink}
                    to="/view" h={'100%'}
                    borderBottom={isViewTabActive ? '2px solid #fff' : 'none'}
                    color={isViewTabActive ? '#fff' : 'brand.secondaryText'}
                    padding={'12px'}
                >
                    Просмотр
                </Link>
                <Link
                    fontSize={'sm'}
                    as={RouterLink}
                    to="/management" h={'100%'}
                    borderBottom={isManagementTabActive ? '2px solid #fff' : 'none'}
                    color={isManagementTabActive ? '#fff' : 'brand.secondaryText'}
                    padding={'12px'}
                >
                    Управление
                </Link>
            </Flex>
        </Flex>
    )
}

import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { Profile } from './Profile'
import { NotificationsNev } from './NotificationsNev'
import { SearchBox } from './SearchBox';
import { Logo } from './Logo';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export default function Header() {
    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        large: true
    });

    return(
        <Flex 
            w="100%" 
            as="header" 
            maxW={1480} 
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            { !isWideVersion && (
                <IconButton
                    aria-label="Open Navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>
            )}

            <Logo />

            { isWideVersion && (
                <SearchBox />
            )}

            <Flex
                align="center"
                ml="auto"
            >
                <NotificationsNev />

                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    );
}
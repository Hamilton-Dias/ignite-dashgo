import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
    return(
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Hamilton Dias</Text>
                <Text color="gray.300" fontSize="small">Hamiltondias1997@hotmail.com</Text>
            </Box>

            <Avatar size="md" name="Hamilton Dias" />
        </Flex>
    );
}
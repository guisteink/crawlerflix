import { Heading, Flex } from '@chakra-ui/react'

export default function Header()
{
    return (
        <Flex as="nav" justify="center" align="center" wrap="wrap" p="8" w="100%" bg="white">
            <Heading as='h3' size='md'>Top films and series of Netflix 2022</Heading>
        </Flex>
    );
}


import { SimpleGrid, Box, Grid, Text, Badge, HStack } from '@chakra-ui/react'

export default function Header()
{
    return (
        <SimpleGrid>
            <Box p="4" bgGradient="linear(to-t, #FAC8CD, #D7BCC8)" w='100vw' h='250px'>
                <HStack>
                    <Badge p="5" style={{
                        backgroundColor: 'white',
                        // backgroundColor: 'rgba(52, 52, 52, 0.15)',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '3px 2px 5px rgba(17, 17, 17m 0.55)'
                    }}>
                        <Text fontSize='xl'>Top 10 films/series of Netflix in 2022</Text>
                    </Badge>
                    <Badge p="5" style={{
                        backgroundColor: 'white',
                        // backgroundColor: 'rgba(52, 52, 52, 0.15)',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '3px 2px 5px rgba(17, 17, 17m 0.55)'
                    }}>
                        <Text fontSize='xl'>Select the country</Text>
                    </Badge>
                    <Badge p="5" style={{
                        backgroundColor: 'white',
                        // backgroundColor: 'rgba(52, 52, 52, 0.15)',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '3px 2px 5px rgba(17, 17, 17m 0.55)'
                    }}>
                        <Text fontSize='xl'>Select film/serie</Text>
                    </Badge>
                </HStack>
            </Box>
            <Box bgGradient="linear(to-t, white, #FAC8CD)" w='100vw' h='250px'></Box>
        </SimpleGrid >
    );
}


import Header from './components/header'
import Card from './components/card'
import { Flex, SimpleGrid } from '@chakra-ui/react'

export default function App()
{
  return (
    <Flex p="5" bgGradient="linear(to-t, white, #FAC8CD, #D7BCC8)" >
      <SimpleGrid display="block" w='100vw' h='100vh'>
        <Header />
        <Card />
      </SimpleGrid>
    </Flex>
  );
}


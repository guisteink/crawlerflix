import { Heading, Flex } from '@chakra-ui/react'
import { Box, } from '@chakra-ui/react'
import { Radio, RadioGroup, Stack, Select, Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import _ from 'lodash'
import
{
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react'
import Crawler from '../services/crawler'

const countries = [
    'united-states', 'canada', 'france', 'germany', 'united-kingdom', 'brazil', 'argentina', 'portugal', 'spain', 'paraguay'
]

export default function Card()
{
    const [type, setType] = React.useState('films')
    const [country, setCountry] = React.useState('brazil')

    React.useEffect(() =>
    {
        loadData()
    }, [type, country])

    const loadData = async () =>
    {
        return await Crawler.search(type, country)
    }

    return (
        <>
            <Flex align="center" justify="center" mb="5" mt="5" bg="white" w="100%" h="10vh">
                <Box pl="5" pr="5">
                    <RadioGroup onChange={setType} value={type}>
                        <Stack direction='row'>
                            <Radio value='films'>Movie</Radio>
                            <Radio value='tv'>Series</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
                <Box pl="5" pr="5">
                    <Select onChange={(e) => setCountry(e.target.value)} placeholder='Select the country'>
                        {_.map(countries, country =>
                        {
                            return (<option value={country}>{country}</option>)
                        })}
                    </Select>
                </Box>
            </Flex >
            <Flex align="center" justify="center" mb="5" mt="5" bg="white" w="100%" h="auto">
                <Table w="100%" variant='simple'>
                    <TableCaption>This week</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>{type}</Th>
                            <Th isNumeric>Weeks on top10</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>inches</Td>
                            <Td isNumeric>12</Td>
                        </Tr>
                        <Tr>
                            <Td>2</Td>
                            <Td>inches</Td>
                            <Td isNumeric>4</Td>
                        </Tr>
                        <Tr>
                            <Td>3</Td>
                            <Td>inches</Td>
                            <Td isNumeric>3</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Flex >

        </>
    );
}

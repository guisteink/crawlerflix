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

const countries = [
    'United States', 'Canada', 'France', 'Germany', 'United Kingdom', 'Brazil', 'Argentina', 'Portugal', 'Spain', 'Paraguay'
]

export default function Card()
{
    const [type, setType] = React.useState('film')
    const [country, setCountry] = React.useState('Brazil')

    React.useEffect(() =>
    {
        console.log('type: ', type)
        console.log('country: ', country)
    }, [type, country])

    return (
        <>
            <Flex align="center" justify="center" mb="5" mt="5" bg="white" w="100%" h="10vh">
                <Box pl="5" pr="5">
                    <RadioGroup onChange={setType} value={type}>
                        <Stack direction='row'>
                            <Radio value='film'>Movie</Radio>
                            <Radio value='serie'>Series</Radio>
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
                            <Td isNumeric>3 (m)</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Flex >

        </>
    );
}


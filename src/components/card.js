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
    Progress,
    Tr,
    Th,
    Td,
    TableCaption,
    Spinner
} from '@chakra-ui/react'
import Crawler from '../services/crawler'

const countries = [
    'united-states', 'canada', 'france', 'germany', 'united-kingdom', 'brazil', 'argentina', 'portugal', 'spain', 'paraguay'
]

export default function Card()
{
    const [type, setType] = React.useState('films')
    const [country, setCountry] = React.useState('brazil')
    const [data, setData] = React.useState([])
    const [week, setWeek] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [maxWeeksOnTop, setMaxWeeksOnTop] = React.useState()

    React.useEffect(() =>
    {
        loadData()
    }, [type, country])

    const getMax = (array) =>
    {
        let max = 0, i = 0;
        for (i = 0; i < array.length; i++) {
            if (parseInt(array[i].weeksOnTop) >= parseInt(max)) {
                max = array[i].weeksOnTop
            }
        }
        setMaxWeeksOnTop(max)
    }

    const loadData = async () =>
    {
        try {
            setLoading(true)
            const response = await Crawler.search(type, country)
            setData(response.array)
            setWeek(response.week)
            getMax(response.array)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
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
                {loading ?
                    <Flex align="center" justify="center" h="50vh">
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl' />
                    </Flex>
                    :
                    <Table w="100%" mb="10" variant='simple'>
                        <TableCaption>{week}</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Position</Th>
                                <Th>{type === "tv" ? "Series" : "Movie"}</Th>
                                <Th isNumeric>Weeks on top10 (max weeks {maxWeeksOnTop})</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {_.map(data, item =>
                            {
                                return (
                                    <Tr>
                                        <Td>{item.position}</Td>
                                        <Td>{item.title}</Td>
                                        <Td><Progress value={(item.weeksOnTop / maxWeeksOnTop) * 100} />{item.weeksOnTop}</Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                }
            </Flex >

        </>
    );
}


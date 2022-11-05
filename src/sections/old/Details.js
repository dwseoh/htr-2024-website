import { Checkbox, Button, Select, FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem, useBreakpointValue } from '@chakra-ui/react'


const Details = () => {
    const colSpan = useBreakpointValue({ base: 2, md: 1})
    return (
        <VStack 
            w='full'
            h='full'
            p={10}
            spacing={10}
            alignItems='flex-start'
        >

            <VStack
                spacing={3}
                alignItems='flex-start'
            >
                <Heading size='2xl'>Your details</Heading>
                <Text>If you already have an account, click here</Text>
            </VStack>

            <SimpleGrid
                w='full'
                columns={2}
                columnGap={3}
                rowGap={6}
            >
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder='John'/>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder='Doe'/>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder='123 Happy Blvd.'/>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input placeholder='Oakville'/>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select>
                            <option value='CAN'>Canada</option>
                            <option value='USA'>USA</option>
                        </Select>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    <Checkbox defaultChecked>Ship to billing</Checkbox>
                </GridItem>

                <GridItem colSpan={2}>
                    <Button variant='primary' size='lg' w='full'>Place Order</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    ) 
}

export default Details
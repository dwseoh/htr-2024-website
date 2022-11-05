import { 
    Divider, 
    HStack, 
    VStack, 
    Heading, 
    Text,
    Button,
    useColorMode,
    useColorModeValue 
} from '@chakra-ui/react'

const Cart = () => {
    const { toggleColorMode } = useColorMode()
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50')
    const secondaryTextColor = useColorModeValue('gray.600', 'gray.400')

    return (
        <VStack 
            w='full'
            h='full'
            p={10}
            spacing={10}
            alignItems='flex-start'
            bg={bgColor}
        >
            <VStack
                spacing={3}
                alignItems='flex-start'
            >
                <Heading size='2xl'>Your cart</Heading>
                <Text>Review your details</Text>
                <Text fontSize='xs'>
                    If the price is too hard on your eyes, {' '}
                    <Button onClick={toggleColorMode} variant='link' fontSize='xs'>
                        change the theme.
                    </Button>
                </Text>
            </VStack>

            <VStack
                spacing={4}
                alignItems='stretch'
                w='full'
            >
                <HStack justifyContent='space-between'>
                    <Text color={secondaryTextColor}>Subtotal</Text>
                    <Heading size='sm'>$119.00</Heading>
                </HStack>

                <HStack justifyContent='space-between'>
                    <Text color={secondaryTextColor}>Shipping</Text>
                    <Heading size='sm'>$19.00</Heading>
                </HStack>

                <HStack justifyContent='space-between'>
                    <Text color={secondaryTextColor}>Taxes (estimated)</Text>
                    <Heading size='sm'>$23.80</Heading>
                </HStack>
            </VStack>
            
            <Divider />

            <HStack 
                justifyContent='space-between'
                w='full'
            >
                    <Text color={secondaryTextColor}>Total</Text>
                    <Heading size='xl'>$162.79</Heading>
                </HStack>
        </VStack>
    )
}

export default Cart
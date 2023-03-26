import React from 'react';
import {
    NativeBaseProvider,
    useColorMode,
    Text,
    Button,
    Center,
    Box,
    useColorModeValue,
} from 'native-base';
import HeaderBack from '../components/HeaderBack';
const DarkMode = () => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue('Light', 'Dark');
    const bg = useColorModeValue('warmGray.50', 'coolGray.800');
    return (
        <>

            <Box bg={bg} minHeight={'100%'}>
                <Center>
                    <Box p="4" flex="1" maxW="300" w="100%" mt={10} safeArea>
                        <Text fontSize="lg" display="flex" mb={20}>
                            The active color mode is{' '}
                            <Text bold fontSize="18px">
                                {text}
                            </Text>
                        </Text>
                        <Button onPress={toggleColorMode} h={10}>
                            Change dark mode
                        </Button>
                    </Box>
                </Center>
            </Box>
        </>
    );
};

export default DarkMode;

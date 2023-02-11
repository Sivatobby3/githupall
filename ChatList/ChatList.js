import { Box, HStack, Image, Text, VStack } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';
import smalldp from '../assets/UiImages/smalldp.jpg';
import { useNavigation } from '@react-navigation/native';

const chatList = [
    {
        icon: smalldp,
        name: 'Siva',
        message: 'hello',
        time: '9:00PM'
    },
    {
        icon: smalldp,
        name: 'Jhon',
        message: 'how are you',
        time: '10:00PM'
    },
    {
        icon: smalldp,
        message: 'u from',
        name: 'Tommy',
        time: '11:00PM'
    },
    {
        icon: smalldp,
        name: 'Tobby',
        message: 'hello',
        time: '9:00PM'
    },
    {
        icon: smalldp,
        name: 'Lora',
        message: 'how are you',
        time: '10:00PM'
    },
    {
        icon: smalldp,
        message: 'u from',
        name: 'Michale',
        time: '11:00PM'
    },
    {
        icon: smalldp,
        name: 'Ganser',
        message: 'hello',
        time: '9:00PM'
    },
    {
        icon: smalldp,
        name: 'Buttin',
        message: 'how are you',
        time: '10:00PM'
    },
    {
        icon: smalldp,
        message: 'u from',
        name: 'Rock',
        time: '11:00PM'
    },
    {
        icon: smalldp,
        name: 'Antrol',
        message: 'hello',
        time: '9:00PM'
    },
    {
        icon: smalldp,
        name: 'Bansen',
        message: 'how are you',
        time: '10:00PM'
    },
    {
        icon: smalldp,
        message: 'u from',
        name: 'Hevarstil',
        time: '11:00PM'
    },

];



const ChatFlatlist = () => {
    const navigation = useNavigation()

    const renderItem = ({ item }) => (
        <Box
            padding={2}

        >
            <Box
                borderRadius={10}
                padding={5}
                shadow={2}
                bgColor={"#fff"}>
                <HStack justifyContent={"space-between"}>
                    <HStack alignItems={"center"} space={2}>
                        <Image
                            source={item.icon}
                            alt="Alternate Text"
                            style={{ width: "30%", height: "100%", borderRadius: 400 / 2 }}
                        />
                        <VStack >
                            <Text
                                fontStyle="normal"
                                fontWeight="500"
                                fontSize="18px"
                                onPress={() =>
                                    navigation.navigate("ChatInbox")
                                }>{item.name}</Text>
                            <Text
                                fontStyle="normal"
                                fontWeight="400"
                                fontSize="12px">{item.message}</Text>
                        </VStack>
                    </HStack>
                    <VStack
                        justifyContent={"center"}>
                        <Text>{item.time}</Text>
                    </VStack>
                </HStack>


            </Box>

        </Box>
    );

    return (
        <FlatList
            data={chatList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
}


export default ChatFlatlist;
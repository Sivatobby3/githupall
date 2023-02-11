import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar } from 'react-native';
import smalldp from '../assets/UiImages/smalldp.jpg';
import { HStack, VStack, Box, Image, Button, Divider, Text, } from 'native-base'
import { title } from 'process';
import BackgroundImage from '../assets/Background.jpg';
import Rain from '../assets/UiImages/rain.jpg';
import Mang from '../assets/UiImages/mang.jpg';
import Naturee from '../assets/UiImages/hello.jpg';
import Icon from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/Fontisto';
import Sharegoogle from 'react-native-vector-icons/EvilIcons';
import Whatsapp from 'react-native-vector-icons/FontAwesome';

const postList = [
    {
        icon: smalldp,
        name: 'siva',
        state: 'tamil nadu',
        title: 'This is my first post',
        image: BackgroundImage
    },
    {
        icon: Mang,
        name: 'tobby',
        state: 'tamil nadu',
        title: 'This is my first post',
        image: Naturee

    },
    {
        icon: smalldp,
        name: 'siva',
        state: 'tamil nadu',
        title: 'This is my first post This is my first post This is my first post',
        image: BackgroundImage
    },
    {
        icon: smalldp,
        name: 'tobby',
        state: 'tamil nadu',
        title: 'This is my first post',
        image: Rain

    },
];



const PostFlatlist = () => {
    const renderItem = ({ item }) => (
        <Box
            space={5}
            padding={4}
        >
            <Box
                borderRadius={10}
                minHeight={500}
                padding={3}
                shadow={1}
                bgColor={"#fff"}>
                <HStack justifyContent={"space-between"}>
                    <HStack alignItems={"center"} space={2}>
                        <Image
                            source={item.icon}
                            alt="Alternate Text"
                            size={"sm"} resizeMode={"contain"}
                            style={{ height: "100%", }}
                        />
                        <VStack >
                            <Text
                                fontStyle="normal"
                                fontWeight="500"
                                fontSize="18px"
                            >{item.name}</Text>
                            <Text
                                fontStyle="normal"
                                fontWeight="400"
                                fontSize="12px">{item.state}</Text>
                        </VStack>
                    </HStack>
                    <VStack
                        justifyContent={"center"}>
                        <Button >
                            follow
                        </Button>
                    </VStack>
                </HStack>
                <Divider m={2} />
                <HStack >
                    <Text>{item.title}</Text>
                </HStack>
                <HStack m={2}>
                    <Image
                        source={item.image}
                        alt="Alternate Text"
                        width={'100%'}
                        size={"400px"}
                        resizeMode={"contain"}
                    />
                </HStack>
                <Divider m={2} />
                <HStack padding={3} alignItems={"center"} justifyContent={"space-between"}>
                    <Icon name="like2" size={25} color="#33C7FF" />
                    <Divider
                        height='100%'
                        width='0.5'
                        backgroundColor='#EAEEE9' />

                    <Comment name="commenting" size={25} color="#33C7FF" />
                    <Divider
                        height='100%'
                        width='0.5'
                        backgroundColor='#EAEEE9' />
                    <Sharegoogle name="share-google" size={30} color="#33C7FF" />
                    <Divider
                        height='100%'
                        width='0.5'
                        backgroundColor='#EAEEE9' />
                    <Whatsapp name="whatsapp" size={25} color="green" />
                </HStack>
            </Box>

        </Box>
    );

    return (
        <FlatList
            data={postList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
}


export default PostFlatlist;
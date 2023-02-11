import React, { useEffect, useState } from 'react';
import {
    Popover,
    Button,
    Input,
    Box,
    FormControl,
    Center,
    NativeBaseProvider,
    Text,
    HStack,
    View,
    Image,
    VStack,
} from 'native-base';
import BackgroundImage from '../assets/Background.jpg';

const LoginUi = () => {
    return (
        <>
            <View style={{ flex: 1 }}>
                <Image
                    style={{ flex: 1, width: null, marginTop: -500 }}
                    source={BackgroundImage}
                    alt=""
                />
            </View>
            <View
                backgroundColor="#fff"
                opacity="0.95"
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                borderTopLeftRadius="30"
                borderTopRightRadius="30"
                paddingTop="10"
                paddingBottom="20">
                <VStack padding={5} width={'100%'} space={5}>
                    <Input borderRadius={15} placeholder="Email" height={'50px'} />
                    <Input borderRadius={15} placeholder="Password" height={'50px'} />

                    <Button>Login</Button>
                </VStack>
            </View>
         
        </>
    )
}

export default LoginUi
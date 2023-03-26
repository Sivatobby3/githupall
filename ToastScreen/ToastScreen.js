import { Button, Center, useToast, VStack } from 'native-base';
import React from 'react';

const ToastScreen = () => {
    const toast = useToast();

    return (
        <>
            <Center py={5}>
                <Button onPress={() => toast.show({
                    description: "Hello world"
                })}>
                    Show Toast
                </Button>
            </Center>

            <Center>
                <VStack space={2}>
                    <Button onPress={() => toast.show({
                        title: "Hello world",
                        placement: "bottom"
                    })}>
                        Bottom
                    </Button>

                    <Button onPress={() => toast.show({
                        title: "Hello world",
                        placement: "top"
                    })}>
                        Top
                    </Button>

                    <Button onPress={() => toast.show({
                        title: "Hello world",
                        placement: "top-left"
                    })}>
                        Top left
                    </Button>

                    <Button onPress={() => toast.show({
                        title: "Hello world",
                        placement: "top-right"
                    })}>
                        Top right
                    </Button>

                    <Button onPress={() => toast.show({
                        title: "Hello world",
                        placement: "bottom-left"
                    })}>
                        Bottom left
                    </Button>

                    <Button onPress={() => toast.show({
                        title: "Hello world",
                        placement: "bottom-right"
                    })}>
                        Bottom right
                    </Button>
                </VStack>
            </Center>

        </>
    )
}

export default ToastScreen
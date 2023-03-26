import { Button, Center, HStack, Skeleton, VStack } from 'native-base';
import React from 'react';


const SkeletonScreen = () => {
    return (
        <>
            <Center w="100%" py={2}>
                <VStack
                    w="90%"
                    maxW="400"
                    borderWidth="1"
                    space={8}
                    overflow="hidden"
                    rounded="md"
                    _dark={{
                        borderColor: 'coolGray.500',
                    }}
                    _light={{
                        borderColor: 'coolGray.200',
                    }}>
                    <Skeleton h="40" />
                    <Skeleton.Text px="4" />
                    <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
                </VStack>
            </Center>

            <Center w="100%">
                <HStack
                    w="90%"
                    maxW="400"
                    borderWidth="1"
                    space={8}
                    rounded="md"
                    _dark={{
                        borderColor: 'coolGray.500',
                    }}
                    _light={{
                        borderColor: 'coolGray.200',
                    }}
                    p="4">
                    <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
                    <VStack flex="3" space="4">
                        <Skeleton startColor="amber.300" />
                        <Skeleton.Text />
                        <HStack space="2" alignItems="center">
                            <Skeleton size="5" rounded="full" />
                            <Skeleton h="3" flex="2" rounded="full" />
                            <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                        </HStack>
                    </VStack>
                </HStack>
            </Center>

        </>
    );
};

export default SkeletonScreen;

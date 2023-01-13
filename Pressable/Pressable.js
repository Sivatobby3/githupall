import { Badge, Box, Flex, HStack, Pressable, Spacer, Text } from "native-base";
import React from "react";

const PressablePage = () => {
    return (
        <>
        <Pressable>
        {({isHovered, isFocused, isPressed}) => {
          return (
            <Box
              maxW="96"
              borderWidth="1"
              borderColor="coolGray.300"
              shadow="3"
              bg={
                isPressed
                  ? 'coolGray.200'
                  : isHovered
                  ? 'coolGray.200'
                  : 'coolGray.100'
              }
              p="5"
              rounded="8"
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}>
              <HStack alignItems="center">
                <Badge
                  colorScheme="darkBlue"
                  _text={{
                    color: 'white',
                  }}
                  variant="solid"
                  rounded="4">
                  Button
                </Badge>
                <Spacer />
              </HStack>
              <Text
                color="coolGray.800"
                mt="3"
                fontWeight="medium"
                fontSize="xl">
                Pressable
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                this is pressable card
              </Text>
              <Flex>
                {isFocused ? (
                  <Text
                    mt="2"
                    fontSize={12}
                    fontWeight="medium"
                    textDecorationLine="underline"
                    color="darkBlue.600"
                    alignSelf="flex-start">
                    Read More
                  </Text>
                ) : (
                  <Text
                    mt="2"
                    fontSize={12}
                    fontWeight="medium"
                    color="darkBlue.600">
                    Read More
                  </Text>
                )}
              </Flex>
              {/* <Button
                title="Open drawer"
                onPress={() => drawer.current.openDrawer()}
              /> */}
            </Box>
          );
        }}
      </Pressable>
        </>
    );
};

export default PressablePage;
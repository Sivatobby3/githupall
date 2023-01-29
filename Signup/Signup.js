import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider } from "native-base";
const Signup = () => {
    return (
        <>
            <Box minHeight={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box width={'80%'}>
                    <Heading size="lg">
                        Welcome
                    </Heading>
                    <Heading mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="medium" size="xs">
                        Sign up to continue!
                    </Heading>
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input placeholder="Enter your email" />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" placeholder="Enter your password" />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <Input type="password" placeholder="Enter your confirm password" />
                        </FormControl>
                        <Button mt="2" colorScheme="indigo">
                            Sign up
                        </Button>
                    </VStack>
                </Box>

            </Box>

        </>
    )
}

export default Signup
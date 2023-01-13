import { Box } from 'native-base';
import React, { useState } from 'react';

import {
    Button, FormControl,
    Input, Modal
} from 'native-base';
const LoginModel = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModall, setShowModall] = useState(false);

    return (
        <Box padding={5} shadow={8} bgColor={'#fff'} width={'100%'}>
            <Button onPress={() => setShowModall(true)} colorScheme="success">
                Login Modal
            </Button>
            <Modal isOpen={showModall} onClose={() => setShowModall(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>Login</Modal.Header>
                    <Modal.Body>
                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mt="3">
                            <FormControl.Label>Password</FormControl.Label>
                            <Input />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    setShowModall(false);
                                }}>
                                Cancel
                            </Button>
                            <Button
                                onPress={() => {
                                    setShowModall(false);
                                }}>
                                Login
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>

        </Box>
    )
}

export default LoginModel
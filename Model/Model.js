import { Box, VStack, Stack, ScrollView, Image, Text } from 'native-base';
import React from 'react';
import { useState } from 'react';
import Modalimg from '../assets/modalimg.png';
import Loginmodal from '../assets/loginmodal.png';
import Normalmodal from '../assets/normalmodal.png';

import {
    Button,
    Modal,
    FormControl,
    Input,
    Center,
    NativeBaseProvider,
} from 'native-base';

const Model = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModall, setShowModall] = useState(false);

    return (
        <Box padding={5} shadow={8} bgColor={'#fff'} width={'100%'}>
            <Button onPress={() => setShowModal(true)} colorScheme="success">
                Modal
            </Button>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>Contact Us</Modal.Header>
                    <Modal.Body>
                        <Text>Welcome</Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    setShowModal(false);
                                }}>
                                Cancel
                            </Button>
                            <Button
                                onPress={() => {
                                    setShowModal(false);
                                }}>
                                Save
                            </Button>
                        </Button.Group>ō
                    </Modal.Footer>
                </Modal.Content>
            </Modal>{' '}
        </Box>
    )
}

export default Model
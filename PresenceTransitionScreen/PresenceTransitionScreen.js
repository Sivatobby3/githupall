import { Button, Center, PresenceTransition } from 'native-base';
import React from 'react';

const PresenceTransitionScreen = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>

            <Center py={5}>
                <Button style={{ width: '80%' }} onPress={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Hide" : "Show"}
                </Button>
                <PresenceTransition visible={isOpen} initial={{
                    opacity: 0
                }} animate={{
                    opacity: 1,
                    transition: {
                        duration: 250
                    }
                }}>
                    <Center mt="7" bg="teal.500" rounded="md" w="300" h="250" _text={{
                        color: "white"
                    }}>
                        Give 5 star
                    </Center>
                </PresenceTransition>
            </Center>

        </>
    )
}

export default PresenceTransitionScreen
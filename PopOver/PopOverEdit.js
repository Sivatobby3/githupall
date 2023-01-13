import React from 'react'
import { Popover, Button,Input, Box,FormControl, Center, NativeBaseProvider, Text } from 'native-base';
import HeaderBack from '../components/HeaderBack';

const PopOverEdit = () => {
    const initialFocusRef = React.useRef(null);

  return (
    <>
   

    <Box  w="100%" alignItems="center">

      <Popover initialFocusRef={initialFocusRef} trigger={triggerProps => {
      return <Button {...triggerProps}>Edit Info</Button>;
    }}>
        <Popover.Content width="56">
          <Popover.Arrow />
          <Popover.CloseButton />
          {
          /* @ts-ignore */
        }
          <Popover.Header>Personal Details</Popover.Header>
          <Popover.Body>
            <FormControl>
              <FormControl.Label _text={{
              fontSize: "xs",
              fontWeight: "medium"
            }}>
                First Name
              </FormControl.Label>
              <Input rounded="sm" fontSize="xs" ref={initialFocusRef} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label _text={{
              fontSize: "xs",
              fontWeight: "medium"
            }}>
                Last Name
              </FormControl.Label>
              <Input rounded="sm" fontSize="xs" />
            </FormControl>
          </Popover.Body>
          <Popover.Footer>
            <Button.Group>
              <Button colorScheme="coolGray" variant="ghost">
                Cancel
              </Button>
              <Button>Save</Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Box>
    </>
  )
}

export default PopOverEdit
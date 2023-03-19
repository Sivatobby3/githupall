import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Input,
  ScrollView,
  Stack,
  Switch,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/FontAwesome5';
import Bg from '../assets/bg.png';
import Profilee from '../assets/profile.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon5 from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>

      <ScrollView
        _contentContainerStyle={{
          // flex: 1,
          pb: 10,
          backgroundColor: '#fff',
        }}>
        <Stack>
          <Box style={{ position: 'relative' }}>
            <Stack width={'100%'}>
              <Image source={Bg} width={'100%'} alt="" />
            </Stack>
            <Box
              style={{
                position: 'absolute',
                top: 130,
                bottom: 0,
                right: 0,
                left: 0,
                display: 'flex',
                justifyContent: 'center',
              }}>
              <HStack
                justifyContent={'center'}
                alignItems={'center'}
                padding={5}>
                <Image source={Profilee} size={130} alt="Alternate Text" />
              </HStack>
            </Box>
          </Box>
        </Stack>
        <Stack
          py={7}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text fontSize={'18px'} fontWeight={'bold'} color={'#252525'}>
            Siva
          </Text>
          <Stack space={2} >
            <Stack>
              <Box borderRadius={7} padding={1} backgroundColor={'#FF8F00'}>
                <Text fontSize={'20px'}> mail@gmail.com</Text>
              </Box>
            </Stack>
            <Box borderRadius={7} alignSelf={'center'} padding={1} backgroundColor={'#06a709'}>
              <Text fontSize={'20px'}>9087672772</Text>
            </Box>
          </Stack>
        </Stack>
        <Stack padding={5} space={3}>
          <Divider />

          <Stack
            direction={'row'}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>Profile Private</Text>
            <Stack
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              direction={'row'}>
              <Text>on</Text>

              <Switch size="lg"
                onValueChange={toggleSwitch}
                value={isEnabled} />
              <Text>off</Text>
            </Stack>
          </Stack>
          <Divider />

          {isEnabled && (
            <>
              <Stack
                direction={'row'}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Stack space={2} direction={'row'}>
                  <Box shadow={2} borderRadius={10} padding={1} bgColor={'#000'}>
                    <Stack
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      direction={'row'}
                      space={2}>
                      <Icon5 name="checkmark" color={'#fff'} size={20} />
                      <Text color={'#fff'}>Verified</Text>
                    </Stack>
                  </Box>
                  <Text>Email</Text>
                </Stack>
                <Text>mail.@gmail.com</Text>
              </Stack>
              <Divider />
              <Stack
                direction={'row'}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Stack space={2} direction={'row'}>
                  <Box shadow={2} borderRadius={10} padding={1} bgColor={'#000'}>
                    <Stack
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      direction={'row'}
                      space={2}>
                      <Icon5 name="checkmark" color={'#fff'} size={20} />
                      <Text color={'#fff'}>Verified</Text>
                    </Stack>
                  </Box>
                  <Text>Phone Number</Text>
                </Stack>
                <Text>9087672772</Text>
              </Stack>
            </>
          )}
          {!isEnabled && (
            <>
              <Stack
                direction={'row'}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>Email</Text>
                <Input width={'30%'} value="mail.@gmail.com" placeholder="mail.@gmail.com" />
              </Stack>
              <Divider />

              <Stack
                direction={'row'}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>Phone number</Text>
                <Input width={'30%'} value="9087672772" />
              </Stack>
            </>
          )}
          <Divider />

          <Stack
            direction={'row'}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>Password</Text>
            <Input width={'30%'} placeholder="*******" value="*******" />
          </Stack>
          <Divider />

          <Stack
            direction={'row'}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>Confirm Password</Text>
            <Input type="password" width={'30%'} placeholder="*******" value="*******" />
          </Stack>
          <Divider />

          <Stack
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <Button backgroundColor={'#000'} width={'30%'}>
              update
            </Button>
          </Stack>
          <Divider />

          <Stack
            direction={'row'}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>Delete Account</Text>
            <Icon name="arrow-forward" color={'#000'} size={30} />
          </Stack>
        </Stack>
        <Divider />
      </ScrollView>
    </>
  );
};

export default Profile;

import { Box, ScrollView, VStack } from 'native-base';
import React, { useRef, useState } from 'react';
import {
    Button,
    DrawerLayoutAndroid,
    Text,
    StyleSheet,
    View,
    Image,
    TextBase,
} from 'react-native';
const Drawer = () => {
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');
    const changeDrawerPosition = () => {
        if (drawerPosition === 'left') {
            setDrawerPosition('right');
        } else {
            setDrawerPosition('left');
        }
    };

    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
            <Button
                title="Close drawer"
                onPress={() => drawer.current.closeDrawer()}
            />
        </View>
    );
    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={navigationView}>
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Swipe from the side or press button below to see it!
                </Text>
                <VStack space={5}>
                    <Button
                        title="Open drawer"
                        onPress={() => drawer.current.openDrawer()}
                    />
                </VStack>
            </View>
        </DrawerLayoutAndroid>
    )
}

export default Drawer
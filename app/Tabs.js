import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Forgot from './Forgot';
import LogIn from './LogIn';


const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={LogIn} />
                <Tab.Screen name="Forgot" component={Forgot} />
            </Tab.Navigator>
        </View>
    )
}

export default Tabs;

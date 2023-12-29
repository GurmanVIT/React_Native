import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import Forgot from './Forgot';
import LogIn from './LogIn';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={LogIn}
                    options={{
                        tabBarIcon: () => (
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../app/img/login.png')
                                } />
                        ),
                    }}
                />
                <Tab.Screen name="Forgot" component={Forgot}
                    options={{
                        tabBarIcon: () => (
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../app/img/forgot.jpg')
                                } />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    );
};

export default Tabs;

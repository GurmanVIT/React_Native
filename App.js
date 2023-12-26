import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './app/LogIn';
import SignUp from './app/SignUp';
import Forgot from './app/Forgot';
import Horizental from './app/Horizental';
import Vertical from './app/Vertical';
import SwitchRadio from './app/SwitchRadio';
import Sliders from './app/Sliders';
import Back from './app/Back';
import Tabs from './app/Tabs';


const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Horizental" component={Horizental} />
        <Stack.Screen name="Vertical" component={Vertical} />
        <Stack.Screen name="SwitchRadio" component={SwitchRadio} />
        <Stack.Screen name="Sliders" component={Sliders} />
        <Stack.Screen name="Back" component={Back} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
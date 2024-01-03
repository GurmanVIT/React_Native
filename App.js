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
import Api from './app/Api';
import Post from './app/Post';
import Redux from './app/Redux';
import { Provider } from 'react-redux';
import store from './app/redux/store';


const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <Provider store={store}>
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
          <Stack.Screen name="Api" component={Api} />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="Redux" component={Redux} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
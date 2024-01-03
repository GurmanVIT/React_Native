import React from 'react';
import { View, Text } from 'react-native';

const Back = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("LogIn") }}>LogIn</Text>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("SignUp") }}>SignUp</Text>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("Forgot") }}>Forgot</Text>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("Horizental") }}>Horizental</Text>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("Vertical") }}>Vertical</Text>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("SwitchRadio") }}>SwitchRadio</Text>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("Sliders") }}>Sliders</Text>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("Tabs") }}>Tabs</Text>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("Api") }}>Api</Text>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("Post") }}>Post</Text>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("Redux") }}>Redux</Text>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("ReduxSignup") }}>ReduxSignup</Text>
        </View>
    )
}

export default Back

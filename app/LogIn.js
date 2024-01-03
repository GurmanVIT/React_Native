import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, loginUser } from './redux/slice/authSlice';

const LogIn = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();
    const state = useSelector((state) => state.auth);

    console.log("state", state.user.data);

    const login = () => {
        const credentials = {
            email: email,
            password: password,
            fcmToken: "abc"
        }
        dispatch(loginUser(credentials))
    }


    return (
        <ScrollView style={styles.container} behavior="padding">
            <Text onPress={() => { navigation.navigate("Back") }} style={{ textAlign: 'center', marginTop: 20 }}>
                <Image
                    source={require('../app/img/back.png')}
                    style={{ width: 40, height: 40 }}

                /></Text>
            <Text style={styles.inner}>Sign in to your account</Text>
            <Text style={styles.paragraph}>Plase sign in to enter in app</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(val) => setEmail(val)}
                    placeholder='Email'
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={(val) => setPassword(val)}
                    placeholder='Password'
                />
            </View>

            <Text style={styles.forgot} onPress={() => navigation.navigate("Forgot")}>Forgot Password ?</Text>

            <View style={styles.button} >
                <Text style={styles.buttonText} onPress={() => login()}
                >Login</Text>
            </View>
            <Text style={styles.upper}> Don't have an account ?  <Text style={styles.sign} onPress={() => { navigation.navigate("SignUp") }}> Sign Up</Text></Text>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    inner: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 23,
        textAlign: 'center',
        paddingBottom: 10,
        marginTop: 50,
    },
    paragraph: {
        textAlign: 'center',
        marginBottom: 80,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        height: 55,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 2,
        paddingHorizontal: 10,
        fontSize: 18,
        backgroundColor: '#EDF3F2',
    },
    forgot: {
        textAlign: 'right',
        fontWeight: 'bold',
        marginVertical: 30,
    },
    button: {
        backgroundColor: '#5F8FD8',
        height: 45,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    upper: {
        marginTop: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    sign: {
        fontWeight: 'bold',
        color: '#000',
    },

});

export default LogIn;
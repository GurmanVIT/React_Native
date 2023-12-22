import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
} from 'react-native';

const LogIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return (
        <ScrollView style={styles.container} behavior="padding">
            <Text style={styles.inner}>Sign in to your account</Text>
            <Text style={styles.paragraph}>Plase sign in to enter in app</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Email'
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Password'
                />
            </View>

            <Text style={styles.forgot}>Forgot Password ?</Text>

            <View style={styles.button} >
                <Text style={styles.buttonText}>Login</Text>
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
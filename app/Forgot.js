import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';

const Forgot = ({ navigation }) => {
    const [email, setEmail] = useState('');

    return (
        <ScrollView style={styles.container} behavior="padding">
            <Text onPress={() => { navigation.navigate("Back") }} style={{ textAlign: 'center', marginTop: 20 }}>
                <Image
                    source={require('../app/img/back.png')}
                    style={{ width: 40, height: 40 }}

                /></Text>
            <Text style={styles.inner}>Forgot Password</Text>
            <Text style={styles.paragraph}>Please enter your email id.We will send you OTP to reset your password.</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Enter Email'
                />
            </View>


            <View style={styles.button} >
                <Text style={styles.buttonText}>Send</Text>
            </View>
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
    button: {
        backgroundColor: '#5F8FD8',
        height: 45,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default Forgot;
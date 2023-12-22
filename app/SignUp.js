import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    CheckBox,
    ScrollView,
} from 'react-native';

const SignUp = ({ navigation }) => {

    return (
        <ScrollView style={styles.container} behavior="padding">
            <Text style={styles.inner}>Sign in to your account</Text>
            <Text style={styles.paragraph}>Plase sign in to enter in app</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder='Referral Id'
            />

            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder='Namw'
            />

            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder='Email'
            />

            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder='Password'
            />

            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder='Confirm Password'
            />

            <View style={styles.checkboxContainer}>
                {/* <CheckBox
                    style={styles.checkbox}
                /> */}

                <Text style={styles.label}>I have carefully read the Service Agreement and Use</Text>
            </View>

            <View style={styles.button} >
                <Text style={styles.buttonText}>Sign Up</Text>
            </View>
            <Text style={styles.upper}> Already have an account ?  <Text style={styles.sign} onPress={() => navigation.goBack()}>Sign Up</Text></Text>
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
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        marginBottom: 20,

        height: 55,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 2,
        paddingHorizontal: 10,
        fontSize: 18,
        backgroundColor: '#EDF3F2',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
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

export default SignUp;
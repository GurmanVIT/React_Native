import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from './redux/authSliceSignup';

const SignUp = ({ navigation }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const dispatch = useDispatch();
    const state = useSelector((state) => state.auth);
    console.log("state", state);


    const handleSignup = () => {

        const payload = {
            email: "aman.vit@gmail.com",
            password: "123456",
            firstName: "Aman",
            lastName: "Singh",
            countryCode: "+91",
            mobileNumber: "6280896767",
            referralCode: "",
            dateOfBirth: "",
            experienceOfYears: 2,
            country: "sds",
            postalCode: "2342432",
            address: "sdf",
            latitude: "23.23232",
            longitude: "45.34343",
            type: 2
        }


        try {
            dispatch(signupUser(payload));
            // Handle success, e.g., navigate to another screen
        } catch (error) {
            // Handle error, e.g., display an error message
            console.error('signup failed:', error);
        }
    };


    return (
        <ScrollView style={styles.container} behavior="padding">
            <Text onPress={() => { navigation.navigate("Back") }} style={{ textAlign: 'center', marginTop: 20 }}>
                <Image
                    source={require('../app/img/back.png')}
                    style={{ width: 40, height: 40 }}
                />
            </Text>
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
                placeholder='Name'
            />

            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder='Number'
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

            <View style={styles.checkboxContainer}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />


                <Text style={styles.label} onPress={() => { setToggleCheckBox(!toggleCheckBox) }}>I have carefully read the Service Agreement and Use</Text>
            </View>

            <View style={styles.button} >
                <Text style={styles.buttonText} onPress={() => handleSignup()}>Sign Up</Text>
            </View>
            <Text style={styles.upper}> Already have an account ?  <Text style={styles.sign} onPress={() => navigation.navigate("LogIn")}>Sign Up</Text></Text>
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
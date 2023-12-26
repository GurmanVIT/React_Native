import React, { useState } from 'react';
import { Switch, View, StyleSheet, Image } from 'react-native';
import { RadioButton, Text, } from 'react-native-paper';


const SwitchRadio = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
    };

    const [selectedValue, setSelectedValue] = useState('');

    const onSelectOption = (value) => {
        setSelectedValue(value);
    };

    return (

        <View style={styles.container}>
            <Text onPress={() => { navigation.navigate("Back") }} style={{ textAlign: 'center', marginTop: 20 }}>
                <Image
                    source={require('../app/img/back.png')}
                    style={{ width: 40, height: 40 }}

                />
            </Text>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

            <RadioButton.Item
                label="Option 1"
                status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
                onPress={() => onSelectOption('option1')}
            />

            <RadioButton.Item
                label="Option 2"
                value="option2"
                status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
                onPress={() => onSelectOption('option2')}
            />

            <RadioButton.Item
                label="Option 3"
                value="option3"
                status={selectedValue === 'option3' ? 'checked' : 'unchecked'}
                onPress={() => onSelectOption('option3')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
});

export default SwitchRadio;
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const data = [
    { id: '1', text: 'Aman' },
    { id: '2', text: 'Gurman' },
    { id: '3', text: 'Akash' },
    { id: '4', text: 'Lovepreet' },
    { id: '5', text: 'Jatin' },
    { id: '6', text: 'Arsh' },
    { id: '7', text: 'Raman' },
    { id: '8', text: 'No Name' },
];

const Item = ({ item }) => (
    <View style={styles.item}>
        <Image
            source={require('../app/img/boy.jpg')}
            style={{ width: 300, height: 300 }}
        />
        <Text style={{ fontWeight: "bold", marginTop: 15, fontSize: 20 }}>{item.text}</Text>
    </View>
);

const Horizental = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        <View style={styles.container}>
            <Text onPress={() => { navigation.navigate("Back") }} style={{ textAlign: 'center', marginTop: 20 }}>
                <Image
                    source={require('../app/img/back.png')}
                    style={{ width: 40, height: 40 }}

                />
            </Text>
            <View >
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    key={item => item.id}
                    horizontal={true}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});

export default Horizental;
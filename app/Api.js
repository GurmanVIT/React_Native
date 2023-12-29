import React, { useEffect, useState } from 'react'
import { Text, View, Image } from 'react-native';

const Api = ({ navigation }) => {

    const [data, setDetail] = useState([])

    const getAPIData = async () => {
        const url = "https://reqres.in/api/users?page=2";
        let result = await fetch(url);
        result = await result.json();

        setDetail(result.data);
    }

    useEffect(() => {
        getAPIData();
    }, [])

    return (
        <View>
            <Text onPress={() => { navigation.navigate("Back") }} style={{ textAlign: 'center', marginTop: 20 }}>
                <Image
                    source={require('../app/img/back.png')}
                    style={{ width: 40, height: 40 }}
                />
            </Text>
            {
                data.map((item, i) =>
                    <View key={i}>
                        <Text style={{ marginBottom: 5 }}> Email : {item.email}</Text>
                        <Text style={{ marginBottom: 5 }}> First Name : {item.first_name}</Text>
                        <Text style={{ marginBottom: 5 }}> Last Name : {item.last_name}</Text>
                        <Text style={{ marginBottom: 20 }}></Text>

                    </View>
                )
            }
        </View>
    )
}

export default Api;
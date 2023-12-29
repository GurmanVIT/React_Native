import React from 'react'
import { Text, View, Image, Button } from 'react-native';

const Post = ({ navigation }) => {

    const getAPIData = async () => {

        const data = {
            email: "gurman@gmail.com",
            first_name: "deep",
            last_name: "gurman"
        }

        const url = "https://reqres.in/api/users?page=1";
        let result = await fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        });
        result = await result.json();
        console.log(result)
    }

    return (
        <View>
            <Text onPress={() => { navigation.navigate("Back") }} style={{ textAlign: 'center', marginTop: 20 }}>
                <Image
                    source={require('../app/img/back.png')}
                    style={{ width: 40, height: 40 }}
                />
            </Text>
            <Button title='Save Data' onPress={getAPIData} />
        </View>
    )
}

export default Post;
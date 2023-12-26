import React, { useEffect, useRef, useState } from "react";
import { Text, View, Image } from "react-native";
import PagerView from "react-native-pager-view";


const Sliders = ({ navigation }) => {

    const pagerRef = useRef(PagerView)
    const [page11, setPage11] = useState(0)

    useEffect(() => {
        setInterval(() => {
            if (page11 == 0) {
                pagerRef.current.setPage(4)
                setPage11(4)
            }
            else {
                pagerRef.current.setPage(0)
                setPage11(0)
            }
        }, 1000)

    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Text onPress={() => { navigation.navigate("Back") }} style={{ textAlign: 'center', marginTop: 20 }}>
                <Image
                    source={require('../app/img/back.png')}
                    style={{ width: 40, height: 40 }}

                />
            </Text>
            <PagerView style={{ flex: 1, alignItems: "center", justifyContent: 'center' }} initialPage={0} ref={pagerRef} scrollEnabled={true}>
                <View key="1" style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                    <Image
                        source={require('../app/img/boy.jpg')}
                        style={{ width: 300, height: 300 }}
                    />
                    <Text>First page</Text>
                </View>
                <View key="2" style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                    <Image
                        source={require('../app/img/boy.jpg')}
                        style={{ width: 300, height: 300 }}
                    />
                    <Text>Second page</Text>
                </View>
                <View key="3" style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                    <Image
                        source={require('../app/img/boy.jpg')}
                        style={{ width: 300, height: 300 }}
                    />
                    <Text>Third page</Text>
                </View>
                <View key="4" style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                    <Image
                        source={require('../app/img/boy.jpg')}
                        style={{ width: 300, height: 300 }}
                    />
                    <Text>Fourth page</Text>
                </View>
                <View key="5" style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                    <Image
                        source={require('../app/img/boy.jpg')}
                        style={{ width: 300, height: 300 }}
                    />
                    <Text>Fifth page</Text>
                </View>
            </PagerView>

        </View>
    )
}

export default Sliders;
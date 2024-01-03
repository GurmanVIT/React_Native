import { Button, StyleSheet, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Redux = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    console.log("state", state);

    const login = () => {
        dispatch(loginUser())
    }

    return (
        <View>
            <Button
                title='Fetch Todos'
                onPress={() => login()}
            />
        </View>
    )
}

export default Redux

const styles = StyleSheet.create({})
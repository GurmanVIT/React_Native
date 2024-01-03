import { Button, StyleSheet, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slice/authSlice';

const Redux = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    console.log("state", state);

    const getData = () => {
        dispatch(fetchTodos())
    }

    return (
        <View>
            <Button
                title='Fetch Todos'
                onPress={() => getData()}
            />
        </View>
    )
}

export default Redux

const styles = StyleSheet.create({})
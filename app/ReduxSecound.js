import { Button, StyleSheet, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchss } from '../app/redux/slice/TodoTodo';

const ReduxSecound = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    console.log("state===>", state.todo);

    const getData = () => {
        dispatch(fetchss())
    }

    return (
        <View>
            <Button
                title='Fetch'
                onPress={() => getData()}
            />
        </View>
    )
}

export default ReduxSecound

const styles = StyleSheet.create({})
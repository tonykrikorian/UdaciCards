import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import sample from '../store/actions/sample';

export default function Test()
{
    const dispatch = useDispatch();
    const asdads = useSelector(
        store => store[sample.Key],
        shallowEqual
    );

    useEffect(() =>
    {
        dispatch(sample.Action(sample.Type.RUN, {}));
    });

    // console.log(asdads);
    // console.log(TestAction);
    console.log(sample.Type.RUN);
    // console.log(TestAction.Types.RUN === sample.Types.RUN);

    return (
        <View style={ styles.container }>
            <Text>sdfsdf asdasd as asd!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

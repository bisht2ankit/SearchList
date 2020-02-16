import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';

export const Loader = () => {

    return (
        <View style={styles.container}>
            <ActivityIndicator
                style={{justifyContent: 'center'}}
            />
        </View>
    )
}
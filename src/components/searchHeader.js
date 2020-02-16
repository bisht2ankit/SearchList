import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';
import { textInputs } from '../constants/strings';
import { colors } from '../constants/colors';

export const SearchHeader = (props) => {

    const [input, setInput] = useState('');

    return (
        <View>
            <TextInput
                style={styles.searchView}
                placeholder={textInputs.search}
                placeholderTextColor={colors.placeholderColor}
                onSubmitEditing={() => props.onSearchAction(input)}
                onChangeText={(text) => setInput(text)}
            />
        </View>
    )
}
import React, { useState } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './styles';
import activeRadio from '../assets/activeRadio.png';
import disabledRadio from '../assets/disabledRadio.png';
import { globalSytles } from '../constants/globalStyles';

export const RadioButtons = (props) => {

    const [activeIndex, setActiveIndex] = useState(-1);

    const onPressItem = (index) => {
        setActiveIndex(index);
        props.setNoColumns(index + 1);
    }

    return (
        props.data.map((item, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={[globalSytles.row, styles.radioView]}
                    onPress={() => onPressItem(index)}
                >
                    <Image
                        source={activeIndex === index ? activeRadio : disabledRadio}
                        style={styles.radioIcon}
                    />
                    <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
            )
        })
    )
}
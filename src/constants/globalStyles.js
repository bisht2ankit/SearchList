import {StyleSheet} from 'react-native';
import { colors } from './colors';

export const globalSytles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
        marginHorizontal: 16
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
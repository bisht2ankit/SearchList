import {StyleSheet} from 'react-native';
import { colors } from '../constants/colors';

export const styles = StyleSheet.create({
    searchView: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 8,
        padding: 10,
        marginTop: 50
    },
    image: {
        height: 200,
        marginBottom: 10
    },
    container: {
        flex: 1,
        marginTop: '50%'
    },
    listContainer: {
        marginTop: 10,
        flex: 1
    }
})
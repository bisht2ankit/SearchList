import {Alert} from 'react-native';

export const handleApiResponseErrorCase = (error) => {
    Alert.alert(
        "",
        error.response.data.error.message
    );
}
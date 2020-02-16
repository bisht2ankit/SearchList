import React from 'react';
import { View, FlatList, Image, Keyboard } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';

export const ImageListComponent = (props) => {

    const renderItem = (item, index) => {
        return (
            <Image
                key={index}
                source={{ uri: item.link }}
                style={[styles.image,{width: props.numColumns === 1 ? '100%' : '50%'}]}
            />
        )
    }
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={props.images}
                renderItem={({ item, index }) => (renderItem(item, index))}
                numColumns={props.numColumns}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={props.loadMore}
                onEndReachedThreshold={0.5}
                onScrollBeginDrag={() => Keyboard.dismiss()}
            />
        </View>
    )
}

ImageListComponent.defaultProps = {
    numColumns: 1
}

ImageListComponent.propTypes = {
    numColumns: PropTypes.number
}
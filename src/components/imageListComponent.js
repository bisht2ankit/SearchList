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
                style={[styles.image,{
                    width: props.numColumns === 1 ? '100%' : '48%',
                    marginLeft: props.numColumns === 1 ? 0 : '2%'
                }]}
            />
        )
    }
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={props.images.results}
                renderItem={({ item, index }) => (renderItem(item, index))}
                numColumns={props.numColumns}
                key={props.numColumns}
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
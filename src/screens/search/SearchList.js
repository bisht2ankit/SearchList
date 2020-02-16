import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { globalSytles } from '../../constants/globalStyles';
import { SearchHeader } from '../../components/searchHeader';
import { connect } from 'react-redux';
import { getPhotos, clearPhotos } from '../../redux/actions';
import { ImageListComponent } from '../../components/imageListComponent';
import { RadioButtons } from '../../components/radioButtons';
import { appDatas } from '../../constants/strings';

const SearchList = (props) => {

    const [page, setPage] = useState(0);
    const [inputText, setInputText] = useState('')
    const [numColumns, setNumColumns] = useState(1);

    useEffect(() => {
        if (inputText) {
            fetchPhotos();
        }
    }, [inputText, page]);

    const onSearchAction = (input) => {
        props.clearPhotos();
        setPage(0);
        setInputText(input);
    }

    const loadMorePhotos = () => {
        setPage(page + 1);
        if (props.photos.totalImages > page) {
            fetchPhotos()
        }
    }

    const fetchPhotos = () => {
        const searchParams = {
            q: inputText,
            start: page
        }
        console.log(searchParams)
        props.getPhotos(searchParams);
    }

    const setNoColumns = (index) => {
        setNumColumns(index)
    }

    return (
        <View style={globalSytles.mainContainer}>
            <SearchHeader
                onSearchAction={onSearchAction}
            />
            {
                props.photos.results.length > 0
                &&
                <RadioButtons
                    data={appDatas.radioButtons}
                    setNoColumns={setNoColumns}
                />
            }
            <ImageListComponent
                loadMore={loadMorePhotos}
                images={props.photos}
                numColumns={numColumns}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        photos: state.photos
    }
}

export default connect(mapStateToProps, { getPhotos, clearPhotos })(SearchList);
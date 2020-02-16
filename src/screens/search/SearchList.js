import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { globalSytles } from '../../constants/globalStyles';
import { SearchHeader } from '../../components/searchHeader';
import {connect} from 'react-redux';
import { getPhotos, clearPhotos } from '../../redux/actions';
import { ImageListComponent } from '../../components/imageListComponent';

const items = [
    {
      "kind": "customsearch#result",
      "title": "Prevelo Alpha Four｜24\" Kid's Bike｜7 to 11 Years｜8 Speeds ...",
      "htmlTitle": "Prevelo Alpha Four｜24&quot; Kid&#39;s <b>Bike</b>｜7 to 11 Years｜8 Speeds ...",
      "link": "https://cdn.shopify.com/s/files/1/1928/9661/products/Preveo_Alpha_Four_24_Kids_Bike_Silver_Profile.jpg?v=1535512440",
      "displayLink": "prevelobikes.com",
      "snippet": "Prevelo Alpha Four｜24\" Kid's Bike｜7 to 11 Years｜8 Speeds ...",
      "htmlSnippet": "Prevelo Alpha Four｜24&quot; Kid&#39;s <b>Bike</b>｜7 to 11 Years｜8 Speeds ...",
      "mime": "image/jpeg",
      "fileFormat": "image/jpeg",
      "image": {
        "contextLink": "https://prevelobikes.com/products/alpha-four",
        "height": 2000,
        "width": 2000,
        "byteSize": 271353,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZjCs0WqvCXT-bZUfre-Tezwx0Dqlje-5GtcNGtj2rikK8kqLWKRIQxKR&s",
        "thumbnailHeight": 150,
        "thumbnailWidth": 150
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Single Speed Rigid Mountain Bike | Lowside Bike | Surly Bikes",
      "htmlTitle": "Single Speed Rigid Mountain <b>Bike</b> | Lowside <b>Bike</b> | Surly <b>Bikes</b>",
      "link": "https://surlybikes.com/uploads/bikes/_medium_image/Lowside_BK0887-2000x1333.jpg",
      "displayLink": "surlybikes.com",
      "snippet": "Single Speed Rigid Mountain Bike | Lowside Bike | Surly Bikes",
      "htmlSnippet": "Single Speed Rigid Mountain <b>Bike</b> | Lowside <b>Bike</b> | Surly <b>Bikes</b>",
      "mime": "image/jpeg",
      "fileFormat": "image/jpeg",
      "image": {
        "contextLink": "https://surlybikes.com/bikes/lowside",
        "height": 959,
        "width": 1440,
        "byteSize": 1004996,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmaEywYWrALz66u5zJyh1eLG7-jAqxRYimq87WV9HZteJvpVaORkB5RPY8&s",
        "thumbnailHeight": 100,
        "thumbnailWidth": 150
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Huffy 24\" Cranbrook Womens Comfort Cruiser Bike, Periwinkle Blue ...",
      "htmlTitle": "Huffy 24&quot; Cranbrook Womens Comfort Cruiser <b>Bike</b>, Periwinkle Blue ...",
      "link": "https://i5.walmartimages.com/asr/846ad2af-97b1-46d6-9e7f-d0ecf7ac842b_1.d75db0f14301e1607b375f052ee40b6d.jpeg",
      "displayLink": "www.walmart.com",
      "snippet": "846ad2af-97b1-46d6-9e7f- ...",
      "htmlSnippet": "846ad2af-97b1-46d6-9e7f- ...",
      "mime": "image/jpeg",
      "fileFormat": "image/jpeg",
      "image": {
        "contextLink": "https://www.walmart.com/ip/Huffy-24-Cranbrook-Womens-Comfort-Cruiser-Bike-Periwinkle-Blue/241514927",
        "height": 2000,
        "width": 2000,
        "byteSize": 216940,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydWkyWy6Nl38_qZOnMY7YD6FzG0NshmySRQjWhv1jdMKnN5Lb-E2Rt4iJHw&s",
        "thumbnailHeight": 150,
        "thumbnailWidth": 150
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Dirt Road Expedition Bicycle | World Touring Troll Bike | Surly Bikes",
      "htmlTitle": "Dirt Road Expedition Bicycle | World Touring Troll <b>Bike</b> | Surly <b>Bikes</b>",
      "link": "https://surlybikes.com/uploads/bikes/_medium_image/Troll_BK0337.jpg",
      "displayLink": "surlybikes.com",
      "snippet": "Dirt Road Expedition Bicycle | World Touring Troll Bike | Surly Bikes",
      "htmlSnippet": "Dirt Road Expedition Bicycle | World Touring Troll <b>Bike</b> | Surly <b>Bikes</b>",
      "mime": "image/jpeg",
      "fileFormat": "image/jpeg",
      "image": {
        "contextLink": "https://surlybikes.com/bikes/troll",
        "height": 959,
        "width": 1440,
        "byteSize": 174396,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpPPfLjM398TCP2QGtwusQ4wIxY6Z-8vwZPn4lijY5OSfeOyjIkSg9qQ&s",
        "thumbnailHeight": 100,
        "thumbnailWidth": 150
      }
    },
    {
      "kind": "customsearch#result",
      "title": "How Divvy Works: Join, Unlock, Ride, Return | Divvy Bikes",
      "htmlTitle": "How Divvy Works: Join, Unlock, Ride, Return | Divvy <b>Bikes</b>",
      "link": "https://d21xlh2maitm24.cloudfront.net/chi/Divvy-Bike_new_0119_v3.png?mtime=20190820123644",
      "displayLink": "www.divvybikes.com",
      "snippet": "How Divvy Works: Join, Unlock, Ride, Return | Divvy Bikes",
      "htmlSnippet": "How Divvy Works: Join, Unlock, Ride, Return | Divvy <b>Bikes</b>",
      "mime": "image/png",
      "fileFormat": "image/png",
      "image": {
        "contextLink": "https://www.divvybikes.com/how-it-works",
        "height": 2071,
        "width": 3089,
        "byteSize": 3684614,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3enzxFFqh0ZMz-SuaNPB-3OaVN4vdUQhbvGyaG9JX16z_TLnp9y-fEL_w&s",
        "thumbnailHeight": 101,
        "thumbnailWidth": 150
      }
    },
    {
      "kind": "customsearch#result",
      "title": "27.5 Hardtail Mountain Bike | Karate Monkey | Surly Bikes",
      "htmlTitle": "27.5 Hardtail Mountain <b>Bike</b> | Karate Monkey | Surly <b>Bikes</b>",
      "link": "https://surlybikes.com/uploads/bikes/_medium_image/KarateMonkey_BK2042-2000x1333.jpg",
      "displayLink": "surlybikes.com",
      "snippet": "27.5 Hardtail Mountain Bike | Karate Monkey | Surly Bikes",
      "htmlSnippet": "27.5 Hardtail Mountain <b>Bike</b> | Karate Monkey | Surly <b>Bikes</b>",
      "mime": "image/jpeg",
      "fileFormat": "image/jpeg",
      "image": {
        "contextLink": "https://surlybikes.com/bikes/karate_monkey",
        "height": 959,
        "width": 1440,
        "byteSize": 845441,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6v_WmjAx0pU1BDFhV9wUESDYbBKkt9Ho8AJq6ywlvUYDQTQuriP9H2_U&s",
        "thumbnailHeight": 100,
        "thumbnailWidth": 150
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Nishiki Men's Tamarack Comfort Bike | DICK'S Sporting Goods",
      "htmlTitle": "Nishiki Men&#39;s Tamarack Comfort <b>Bike</b> | DICK&#39;S Sporting Goods",
      "link": "https://dks.scene7.com/is/image/dkscdn/16NISANSHKTMRCK15CMF_Blue_Black_White_is?wid=685&fmt=jpg",
      "displayLink": "www.dickssportinggoods.com",
      "snippet": "Nishiki Men's Tamarack Comfort Bike | DICK'S Sporting Goods",
      "htmlSnippet": "Nishiki Men&#39;s Tamarack Comfort <b>Bike</b> | DICK&#39;S Sporting Goods",
      "mime": "image/",
      "fileFormat": "image/",
      "image": {
        "contextLink": "https://www.dickssportinggoods.com/p/nishiki-mens-tamarack-comfort-bike-16nisanshktmrck15cmf/16nisanshktmrck15cmf",
        "height": 721,
        "width": 685,
        "byteSize": 64388,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfScnL5sM9M-lh6S6PaYPuCS_X3fSNt_-eOMuUWOeHeK2srrN2z_ZZomC2&s",
        "thumbnailHeight": 140,
        "thumbnailWidth": 133
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Barbie 16\" Bike With Ride With Me Minibike - Teal : Target",
      "htmlTitle": "Barbie 16&quot; <b>Bike</b> With Ride With Me Minibike - Teal : Target",
      "link": "https://target.scene7.com/is/image/Target/GUEST_5ab9a245-8094-41fb-8a7c-7f17739a9e68?wid=488&hei=488&fmt=pjpeg",
      "displayLink": "www.target.com",
      "snippet": "Barbie 16\" Bike With Ride With Me Minibike - Teal : Target",
      "htmlSnippet": "Barbie 16&quot; <b>Bike</b> With Ride With Me Minibike - Teal : Target",
      "mime": "image/",
      "fileFormat": "image/",
      "image": {
        "contextLink": "https://www.target.com/p/barbie-16-34-bike-with-ride-with-me-minibike-teal/-/A-77471146",
        "height": 488,
        "width": 488,
        "byteSize": 27805,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNj_E-vKg73izr57TfWR7RQyYoLUJLx3w_-fVt-V8nKE2xdE6u0ZnSYY8pAA&s",
        "thumbnailHeight": 130,
        "thumbnailWidth": 130
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Pedego City Commuter - Electric Commuter Bike | Pedego Electric Bikes",
      "htmlTitle": "Pedego City Commuter - Electric Commuter <b>Bike</b> | Pedego Electric <b>Bikes</b>",
      "link": "https://www.pedegoelectricbikes.com/wp-content/uploads/2018/08/pedego-city-commuter-1.jpg",
      "displayLink": "www.pedegoelectricbikes.com",
      "snippet": "Pedego City Commuter - Electric Commuter Bike | Pedego Electric Bikes",
      "htmlSnippet": "Pedego City Commuter - Electric Commuter <b>Bike</b> | Pedego Electric <b>Bikes</b>",
      "mime": "image/jpeg",
      "fileFormat": "image/jpeg",
      "image": {
        "contextLink": "https://www.pedegoelectricbikes.com/product/city-commuter/",
        "height": 824,
        "width": 1000,
        "byteSize": 109516,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqEjGCznWwNWBw0xG-oBgwU2qrzP6R9W3oYaByH39mhvA-clVRA8-zPwT&s",
        "thumbnailHeight": 123,
        "thumbnailWidth": 149
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Amazon.com : Raleigh Bicycles Tokul 2 Hardtail Mountain Bike ...",
      "htmlTitle": "Amazon.com : Raleigh Bicycles Tokul 2 Hardtail Mountain <b>Bike</b> ...",
      "link": "https://images-na.ssl-images-amazon.com/images/I/714sXI3QfQL._AC_SX425_.jpg",
      "displayLink": "www.amazon.com",
      "snippet": "Amazon.com : Raleigh Bicycles Tokul 2 Hardtail Mountain Bike ...",
      "htmlSnippet": "Amazon.com : Raleigh Bicycles Tokul 2 Hardtail Mountain <b>Bike</b> ...",
      "mime": "image/jpeg",
      "fileFormat": "image/jpeg",
      "image": {
        "contextLink": "https://www.amazon.com/Raleigh-Bicycles-Tokul-Hardtail-Mountain/dp/B07SQBGJ72",
        "height": 416,
        "width": 425,
        "byteSize": 39763,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_OLiJIaJEscFT190ze0y7YDB0TI9DUPVd7mYgFpE3XT78PNi7HaxRbQ&s",
        "thumbnailHeight": 123,
        "thumbnailWidth": 126
      }
    }
  ]
const SearchList = (props) => {

    const [page, setPage] = useState(0);
    const [inputText, setInputText] = useState('')

    useEffect(() => {
        if(inputText) {
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
        if(props.photos.totalImages > page){
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

    return (
        <View style={globalSytles.mainContainer}>
            <SearchHeader
                onSearchAction={onSearchAction}
            />
            <ImageListComponent
                loadMore={loadMorePhotos}
                images={items}
                />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        photos: state.photos
    }
}

export default connect(mapStateToProps, {getPhotos, clearPhotos})(SearchList);
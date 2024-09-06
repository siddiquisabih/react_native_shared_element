import React from 'react';
import {
    FlatList,
    Image,
    SafeAreaView, 
    TouchableOpacity,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
 
function MainListing({ navigation }) {

    const navigateToDetail = (item) => {
        navigation.push("listDetail", { item })
    }


    const renderList = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigateToDetail(item)} style={{ justifyContent: "center", alignItems: "center", marginBottom: 20, borderRadius: 10, borderWidth: 1, borderColor: 'lightgray', margin: 10 }}>
                <SharedElement id={`animationId${item.id}`}>
                    <Image style={{ height: 300, borderRadius: 10, width: 300 }} source={{ uri: item?.image }} resizeMode='contain' />
                </SharedElement>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ paddingBottom: 10 }}>


            <FlatList
                data={[
                    { id: 1, image: "https://i0.wp.com/carandbike.pk/wp-content/uploads/2022/12/Honda-Accord-2023.png?fit=666%2C375&ssl=1" },
                    { id: 2, image: "https://autodealing.pk/wp-content/uploads/2023/01/8-removebg-preview-2.png" },
                    { id: 3, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-rear-three-quarter.jpeg?q=80" },
                ]}
                renderItem={renderList}
                keyExtractor={(item) => item.id}
            />


        </SafeAreaView>
    );
}
export default MainListing;
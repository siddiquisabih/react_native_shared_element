import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

function ListDetail({ route }) {
    return (
        <SafeAreaView style={{ paddingBottom: 10 }}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text style={{ margin: 15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 20, borderRadius: 10, marginTop: 20 }}>
                    <SharedElement id={`animationId${route.params.item.id}`} style={{ height: 300, borderRadius: 10, width: '100%' }}>
                        <Image style={{ height: 280, borderRadius: 10, width: '80%', alignSelf: "center" }} source={{ uri: route.params.item.image }} resizeMode='contain' />
                    </SharedElement>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default ListDetail;
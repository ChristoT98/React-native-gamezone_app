import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../Styles/global';
import Card from '../Shared/card';

export default function ReviewDetails({ navigation }) {
    const rating = navigation.getParam('rating');

    // const pressHandler= () => {
    //     navigation.goBack();
    // }

    return (
        <View style={globalStyles.container} >
            <Card>
            <Text>{navigation. getParam('title')}</Text>
            <Text>{navigation. getParam('body')}</Text>
            <View style={styles.rating}>
                <Text>GameZone Rating: </Text>
                <Image source={images.ratings[rating] } style={styles.ratingLogo} />
            </View>
            {/* <Text>{navigation. getParam('rating')}</Text> */}
            {/* <Button title='back to home' onPress={pressHandler} /> */}
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    ratingLogo: {
        width: 150,
        height: 30,
    },
})
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/home';
import ReviewDetails from '../Screens/reviewDetails';
import Header from '../Shared/header';
import React from 'react';


const screens = {
    
    
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZone' />,
                //headerStyle: { backgroundColor: '#eee' },
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            //headerStyle: { backgroundColor: '#333' },
        },
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee', height: 60}
    }
});

export default HomeStack;
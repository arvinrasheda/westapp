import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SplashScreen from '../screen/splash';
import LoginScreen from '../screen/login';
import Order from '../pages/Order';
import Home from '../pages/Home';
import Personal from '../pages/Personal';
import NewOrder from '../pages/NewOrder';
import DetailOrder from '../pages/DetailOrder';
import Kelompok from '../pages/Kelompok';

const HomeNavigator = createBottomTabNavigator(
    {
        Order: Order ,
        Home: Home,
        Personal: Personal
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Order') {
                    iconName = `ios-reorder`;
                } else if (routeName === 'Home') {
                    iconName = `ios-home`;
                } else if (routeName === 'Personal') {
                    iconName = `ios-person`;
                }
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#2ECC71',
            inactiveTintColor: '#263238',
        },
    }
);

const MainContainer = createSwitchNavigator({
    SplashScreen: SplashScreen,
    LoginScreen: LoginScreen,
    HomeNavigator: HomeNavigator,
    New: NewOrder,
    Kelompok: Kelompok,
    Detail: DetailOrder
}, {
    initialRouteName: 'SplashScreen',
});

export default createAppContainer(MainContainer);

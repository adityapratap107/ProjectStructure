import React from 'react';
import {View,Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from '../../assets/routes';
import Home from './home/index';
import Settings from './settings/index';
import Profile from './profile/index';

const Tab = createBottomTabNavigator();

const DashboardNavigator = ()=>{
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name={routes.root.dashboard.tabs.home.NAME} component={Home}/>
            <Tab.Screen name={routes.root.dashboard.tabs.settings.NAME} component={Settings}/>
            <Tab.Screen name={routes.root.dashboard.tabs.profile.NAME} component={Profile}/>
        </Tab.Navigator>
        // <View>
        //     <Text>Hello from Dashboard</Text>
        // </View>

    );
}

export default DashboardNavigator;
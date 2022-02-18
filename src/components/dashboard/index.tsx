import React from 'react';
import {View,Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from '../../assets/routes';
import Home from './home/index';
import Settings from './settings/index';
import Profile from './profile/index';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const DashboardNavigator = (props)=>{
    // Receiving params from navigation
    // console.log(props.route.params.name);
    // console.log(props.route.params.age);

    return(
       
        <Tab.Navigator screenOptions = {
            ({route}) => ({
                tabBarIcon: ({focused,size,color}) => {
                    let iconName;
                    if(route.name == routes.root.dashboard.tabs.home.NAME){
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if(route.name == routes.root.dashboard.tabs.settings.NAME){
                        iconName = focused ? 'settings' : 'settings-outline'
                    }
                    else if(route.name == routes.root.dashboard.tabs.profile.NAME){
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor:'tomato',
                tabBarInactiveTintColor:'grey', 
            })
        }>
            <Tab.Screen name={routes.root.dashboard.tabs.home.NAME} component={Home} options={{title:'Home'}}/>
            <Tab.Screen name={routes.root.dashboard.tabs.settings.NAME} component={Settings} options={{title:'Settings'}}/>
            <Tab.Screen name={routes.root.dashboard.tabs.profile.NAME} component={Profile} options={{title:'Profile'}}/>
        </Tab.Navigator>
    );
}

export default DashboardNavigator;
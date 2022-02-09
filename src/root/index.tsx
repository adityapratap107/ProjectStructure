import React from 'react';
import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../assets/routes';
import DashboardNavigator from '../components/dashboard/index';
import OnboardingNavigator from '../components/onboarding/index';

const Stack = createNativeStackNavigator();

const Root = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={routes.root.onboarding.login.NAME} headerMode='none'>
                <Stack.Screen name={routes.root.onboarding.NAME} component={OnboardingNavigator}/>
                <Stack.Screen name={routes.root.dashboard.NAME} component={DashboardNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Root;
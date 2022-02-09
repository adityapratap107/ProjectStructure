import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../../assets/routes';
import Login from './login/index';
import ForgotPassword from './forgotPassword/index';

const Stack = createNativeStackNavigator();

const OnboardingNavigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name={routes.root.onboarding.login.NAME} component={Login}/>
            <Stack.Screen name={routes.root.onboarding.forgotPassword.NAME} component={ForgotPassword}/>
        </Stack.Navigator>
    );
}

export default OnboardingNavigator;
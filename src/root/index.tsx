import React,{createContext,useState} from 'react';
import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../assets/routes';
import DashboardNavigator from '../components/dashboard/index';
import OnboardingNavigator from '../components/onboarding/index';

const Stack = createNativeStackNavigator();

export const HeaderColorContext = createContext();
// export const HeaderColorContext = createContext({
//     isGreen:false,
//     setIsGreen: ()=>{}, 
// });

const Root = () =>{
    const [isGreen,setIsGreen] = useState(true);
    return(
        <HeaderColorContext.Provider value={isGreen}>
        {/* <HeaderColorContext.Provider value={{isGreen,setIsGreen}}> */}
            <NavigationContainer>
                <Stack.Navigator initialRouteName={routes.root.onboarding.login.NAME} screenOptions={{headerShown: false}}>
                    <Stack.Screen name={routes.root.onboarding.NAME} component={OnboardingNavigator}/>
                    <Stack.Screen name={routes.root.dashboard.NAME} component={DashboardNavigator}/>
                </Stack.Navigator>
            </NavigationContainer>
        </HeaderColorContext.Provider>
    );
}

export default Root;
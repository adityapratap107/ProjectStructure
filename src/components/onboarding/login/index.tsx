import React from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../assets/routes';

const nameOfUser = 'Aditya';
const Login = ()=>{
    
    const navigation = useNavigation();
    const goToDash = () =>{
        navigation.navigate(routes.root.dashboard.NAME,{
            name: nameOfUser
        });
    }

    return(
        <View style={styles.parent}>
            <Pressable onPress={goToDash} style={styles.button}>
                <Text style={styles.text}>Login</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    parent:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:'green',
        padding:5,
        paddingHorizontal:20,
        borderRadius:8
    },
    text:{
        fontSize:20,
        color:'white'
    }
})

export default Login;
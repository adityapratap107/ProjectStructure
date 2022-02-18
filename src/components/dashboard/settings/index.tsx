import React, {useState,useEffect} from 'react';
import {View,Text,Pressable,StyleSheet} from 'react-native';
import Header from '../../common/header';

const Settings = ()=>{

    const [num,setNum] = useState(0);
    const [nums,setNums] = useState(0);

    const onPress1 = ()=>{
        // increase counter
        setNum(num+1);
    };

    const onPress2 = ()=>{
        // increase counter
        setNums(nums+1);
    };

    // It's like an constructor function
    // useEffect(()=>{
    //     console.log('We \'ve successfully "emulated" a constructor');
    //     alert("I am clicked ");
    // },[nums]);

    return(
        <View style = {styles.parent}>
            <Header title = {'Settings'}/>
            <View style = {styles.container1}>
                <Text>{num}</Text>
                <Pressable onPress={onPress1} style={styles.counterButton}>
                    <Text>Click Me</Text>
                </Pressable>
            </View> 

            <View style = {styles.container2}>
                <Text>{nums}</Text>
                <Pressable onPress={onPress2} style={styles.counterButton}>
                    <Text>Click Me</Text>
                </Pressable>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    parent:{
        flex:1,
    },
    container1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    container2:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    counterButton:{
        backgroundColor:'skyblue',
        borderRadius:20,   
        padding:10,
        margin:15,
    }
})

export default Settings;
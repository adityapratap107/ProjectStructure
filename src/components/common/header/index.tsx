import React, {useState,useContext} from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native';
import HeaderColorContext from '../../../root';

const Header = ({title}:{title:string})=>{

    // const [isGreen,setIsGreen] = useState(false);
    // const onPress = () =>{
    //     setIsGreen(!isGreen);
    // };

    // const isGreen = useContext(HeaderColorContext);
    const {isGreen,setIsGreen} = useContext(HeaderColorContext);

    const onPress = () =>{
        setIsGreen(!isGreen);
    };

    return(
        <View style = {styles.parent}>
            <Pressable onPress={onPress}>
                <Text style = {isGreen ? styles.textGreen : styles.text }>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    parent:{
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:40,
        color:'darkgrey'
    },
    textGreen:{
        fontSize:40,
        color:'green'
    },
});

export default Header;

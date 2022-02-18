import React from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../assets/routes';
import {BASE_URL,POSTS,COMMENTS,ALBUMS,PHOTOS,TODOS,USERS} from '../../../services/endpoints';
import Post from '../../../services/models/post';
import Comment from '../../../services/models/comment';
import Album from '../../../services/models/album';
import Photo from '../../../services/models/photo';
import Todo from '../../../services/models/todo';
import {User,Geo,Address,Company} from '../../../services/models/user';

const nameOfUser = 'Aditya';



const Login = ()=>{
    
    const navigation = useNavigation();
    const goToDash = () =>{
        // navigation.navigate(routes.root.dashboard.NAME,{
        //     name: nameOfUser,
        //     age:21
        // });
        navigation.navigate(routes.root.dashboard.NAME);
    }

    
    // service ----  posts 
    const PostApi = async()=>{
        const response = await fetch(BASE_URL + POSTS); 
        const responseJson:Post[] = await response.json();
        console.log(responseJson[3].title);
    }

    // service ----  comments 
    const CommentApi = async()=>{
        const response = await fetch(BASE_URL + COMMENTS);
        const responseJson:Comment[] = await response.json();
        console.log(responseJson[2].email);
    }

    // service ----  albums 
    const AlbumApi = async()=>{
        const response = await fetch(BASE_URL +  ALBUMS);
        const responseJson:Album[] = await response.json();
        console.log(responseJson[4].title);
    }

    // service ----  photos
    const PhotoApi = async()=>{
        const response = await fetch(BASE_URL + PHOTOS);
        const responseJson:Photo[] = await response.json();
        console.log(responseJson[2].url);
    }

    //  service ----  todos
    const TodoApi = async()=>{
        const response = await fetch(BASE_URL + TODOS);
        const responseJson : Todo[] = await response.json();
        console.log(responseJson[1].completed);
    }

    // service ----  users
    const UserApi = async()=>{
        const response = await fetch(BASE_URL + USERS);
        const responseJson:User[] = await response.json();
        console.log(responseJson[5].company.name);
        
    }

    
    return(
        <View style={styles.parent}>
            <Pressable onPress={goToDash} style={styles.button}>
                <Text style={styles.text}>Login</Text>
            </Pressable>
            <Text style={styles.headtext}>SERVICES ✔</Text>
            
            <Pressable onPress={PostApi} style={styles.post}>
                <Text style={styles.text}>POST service</Text>
            </Pressable>
            <Pressable onPress={CommentApi} style={styles.comment}>
                <Text style={styles.text}>COMMENT service</Text>
            </Pressable>
            <Pressable onPress={AlbumApi} style={styles.album}>
                <Text style={styles.text}>ALBUM service</Text>
            </Pressable>
            <Pressable onPress={PhotoApi} style={styles.photo}>
                <Text style={styles.text}>PHOTO service</Text>
            </Pressable>
            <Pressable onPress={TodoApi} style={styles.todo}>
                <Text style={styles.text}>TODO service</Text>
            </Pressable>
            <Pressable onPress={UserApi} style={styles.user}>
                <Text style={styles.text}>USER service</Text>
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
    headtext:{
        color:'black',
        marginTop:20,
        fontSize:40,
        fontFamily:"'Ubuntu', sans-serif",
    },
    button:{
        backgroundColor:'green',
        padding:5,
        paddingHorizontal:20,
        borderRadius:8
    },
    post:{
        backgroundColor:'orange',
        padding:5,
        paddingHorizontal:20,
        borderRadius:8,
        marginTop:100,
    },
    comment:{
        backgroundColor:'yellow',
        padding:5,
        paddingHorizontal:20,
        borderRadius:8,
        marginTop:10,
    },
    album:{
        backgroundColor:'lightblue',
        padding:5,
        paddingHorizontal:20,
        borderRadius:8,
        marginTop:10,
        
    },
    photo:{
        backgroundColor:'lightgreen',
        padding:5,
        paddingHorizontal:20,
        borderRadius:8,
        marginTop:10,
        
    },
    todo:{
        backgroundColor:'grey',
        padding:5,
        paddingHorizontal:20,
        borderRadius:8,
        marginTop:10,
        
    },
    user:{
        backgroundColor:'red',
        padding:5,
        paddingHorizontal:20,
        borderRadius:8,
        marginTop:10,
        
    },
    text:{
        fontSize:20,
        color:'white'
    }
})

export default Login;
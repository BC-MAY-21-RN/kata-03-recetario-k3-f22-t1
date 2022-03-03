'use strict';
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    backgroundApp:{
        backgroundColor:'#282828',
        flex:1,
    },  
    buscador: {
        padding:15,
    },
    searchbar:{
      backgroundColor:'#343435',
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: '600',
        marginTop:30,
        marginHorizontal:18,
        color:'#e61b79',
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        
    },
    title: {
        fontSize: 20,
        color: "white",
        marginLeft:5,
        
    },
    titleRL:{
        fontSize: 15,
        color: "white",
        marginLeft:5,
    },
    img: {
        width:200,
        height:200,
        borderRadius: 5,  
    },
    imgRL:{
        width:140,
        height:140,
        borderRadius: 5,  
    },  
    containerInfo:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#282828',
    },
    imgInfo:{
        flex:2,
        opacity:0.6,
        flexDirection:"column",

    },
    iconInfo:{
        textAlign: 'center',
        paddingHorizontal:10,
        paddingVertical:3,
    },
    titleInfo:{
        fontSize: 25,
        color: "white",
        marginLeft:30,
    },
    
});
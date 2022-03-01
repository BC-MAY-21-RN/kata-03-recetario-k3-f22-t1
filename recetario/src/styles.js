'use strict';
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    backgroundApp:{
        backgroundColor:'#282828',
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
        fontSize: 15,
        color: "white",
    },
    img: {
        width:130,
        height:130,
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

    },
    iconInfo:{
        textAlign: 'center',
        paddingHorizontal:10,
        paddingVertical:3,
    },
    
});
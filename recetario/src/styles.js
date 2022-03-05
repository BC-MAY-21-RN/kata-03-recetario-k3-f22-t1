'use strict';
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    backgroundApp:{
        backgroundColor:'#282828',
        flex:1,
    },  
    searchBar:{
        flexDirection:"row", 
        alignItems:"center",
        backgroundColor:"#343435",
        borderRadius:15,
        height:35,
        justifyContent:"space-around"
    },
    searchInput:{
        width:'80%',
        color:"white",
        fontSize:15,
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
        fontSize: 15.5,
        color: "white",
    },
    img: {
        width:200,
        height:200,
        borderRadius: 5,  
    },
    imgRL:{
        width:125,
        height:125,
        borderRadius: 5,  
    },  
    containerInfo:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#282828',
    },
    headerItem:{
        flex:2,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flexDirection:"column",

    },
    imgBackground:{
        position:"absolute",
        width:"100%",
        height:"100%",
        opacity:0.38,
    },  
    iconInfo:{
        textAlign: 'center',
        paddingHorizontal:10,
        paddingVertical:3,
    },
    titleInfo:{
        fontSize: 25,
        color: "white",
        paddingHorizontal:20,
    },
    containerIngredients:{
        flex:3,
        flexDirection:"column",
        padding:20,
        alignContent:"center"
    },
    itemIngredient:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:15,
        borderBottomWidth:1,
        borderBottomColor:'#3e3e3e',
    },
    titleIngredient:{
        fontSize:20,
        color:"white",
        marginTop:8
    },
    listIngredients:{
        marginTop:15,
    }
});
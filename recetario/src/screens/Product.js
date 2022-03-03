import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ingredient from '../componentes/Ingredients'

//
import styles from '../styles';

const Product = () =>{

    return(
        <SafeAreaView style={[styles.containerInfo]}>
            <ImageBackground  
            source={require('../img/NapolitanPizza.png')}
            style={styles.imgInfo}>
                <View style={{flexDirection:'row',flex:1}}>
                    <View style={{flex:2}}>
                        <Pressable style={styles.iconInfo}>
                            <Icon name="close" size={35} color="white" />
                        </Pressable>
                    </View>
                    <View style={{flexDirection:'row',  justifyContent:'flex-end'}}>
                        <Pressable style={styles.iconInfo}>
                            <Icon name="heart-outline" size={35} color="white" />
                        </Pressable>
                        <Pressable style={styles.iconInfo}>
                            <Icon name="share-outline" size={35} color="white" />
                        </Pressable>
                    </View>
                </View>
                <View style={{flexDirection:"column", flex:1, justifyContent:"center"}}>
                    <Text style={styles.titleInfo}>TRENDING</Text>
                    <Text style={styles.titleInfo}>Napolitan Pizza</Text>
                </View>
                   
            </ImageBackground>
            <View style={{flex:3}}>
                <Ingredient/>
            </View>
                
        </SafeAreaView>
    );
};

export default Product;

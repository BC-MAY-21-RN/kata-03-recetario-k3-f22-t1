import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//
import styles from '../styles';

const Product: ()=> Node = () =>{

    return(
        <SafeAreaView style={[styles.containerInfo]}>
            <ImageBackground  
            source={require('../img/NapolitanPizza.png')}
            style={styles.imgInfo}>
                <View style={{flexDirection:'row'}}>
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
                
                   
            </ImageBackground>
            <View style={{flex:3}}>
                
            </View>
        </SafeAreaView>
    );
};

export default Product;

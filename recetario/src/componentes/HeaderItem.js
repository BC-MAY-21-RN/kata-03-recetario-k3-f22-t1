import React from 'react';
import {View,Image,Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles';
import RECETES from '../LocalData/RECETES'
const HeaderItem = () =>{
    return(
        <View style={styles.headerItem}>
                <Image
                    source={RECETES[0].image}
                    style={styles.imgBackground}
                />
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
            </View>
    );
};

export default HeaderItem;
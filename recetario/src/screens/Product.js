import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, ImageBackground,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ingredients from '../componentes/Ingredients'

import HeaderItem from '../componentes/HeaderItem';
import ListaIngredients from '../componentes/ListIngredients';

import styles from '../styles';

const Product = () =>{

    return(
        <SafeAreaView style={[styles.containerInfo]}>
            <HeaderItem/>
            <ListaIngredients/>
        </SafeAreaView>
    );
};

export default Product;

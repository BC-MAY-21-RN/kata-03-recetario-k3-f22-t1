import {Text, View, FlatList,ScrollView, Image} from 'react-native';
import React from 'react';
import RECETES from '../LocalData/RECETES';
import styles from '../styles';


const ListaProduct = () =>{
    const Item = ({ title }) => (
        <View style={[styles.item],{flex:1, flexDirection:"row", justifyContent:"space-between", marginHorizontal:15}}>
          <Text style={styles.titleRL}>{title}</Text>
          <Text style={styles.titleRL}>{title}</Text>
        </View>
      );

      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );

      return(
        <ScrollView>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <FlatList
            
            data={RECETES.ingredients}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      );
};
export default ListaProduct;
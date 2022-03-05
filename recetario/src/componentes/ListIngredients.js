import {Text, View, FlatList,ScrollView} from 'react-native';
import React from 'react';
import RECETES from '../LocalData/RECETES';
import styles from '../styles';


const keyid=0;
const ListIngredients = () =>{
    const Item = ({ title,cant }) => (
        <View style={styles.itemIngredient}>
          <Text style={styles.titleRL}>{title}</Text> 
          <Text style={styles.titleRL}>{cant}</Text>
        </View>
      );

      const renderItem = ({ item }) => (
        <Item title={item.nameIngredient} 
          cant={item.cant}
        />
      );
      return(
        
        <View style={styles.containerIngredients}>
          <Text style={styles.titleIngredient}>Ingredients</Text>
          <Text style={styles.titleIngredient}>for 3 servings</Text>

          <ScrollView>
          <FlatList
            style={styles.listIngredients}
            data={RECETES[keyid].ingredients}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
        </View>

      );
};
export default ListIngredients;
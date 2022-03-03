import React from 'react';
import {Text, View, FlatList,ScrollView, Image} from 'react-native';

import RECETES from '../LocalData/RECETES';
import styles from '../styles';
const TrendingList = () =>{
    const Item = ({ title, image }) => (
        <View style={styles.item}>
          <Image
            style = {styles.img}
            source = {`${image}`}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
      );

      const renderItem = ({ item }) => (
        <Item title={item.title} image={item.image} />
      );

      return(
        <ScrollView>
          <Text style={styles.sectionTitle}>TRENDING</Text>
          <FlatList
            horizontal
            data={RECETES}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={true}
          />
        </ScrollView>
      );
};
export default TrendingList;
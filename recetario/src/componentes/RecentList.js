import React from 'react';
import {Text, View, FlatList,ScrollView, Image} from 'react-native';

import RECETES from '../LocalData/RECETES';
import styles from '../styles';
const RecentList = () =>{
    const Item = ({ title, image }) => (
        <View style={styles.item}>
          <Image
            style = {styles.imgRL}
            source = {`${image}`}
          />
          <Text style={styles.titleRL}>{title}</Text>
        </View>
      );

      const renderItem = ({ item }) => (
        <Item title={item.title} image={item.image} />
      );

      return(
        <ScrollView>
          <Text style={styles.sectionTitle}>RECENT</Text>
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
export default RecentList;
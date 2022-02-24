import React from 'react';
import {StyleSheet, Text, View, FlatList,ScrollView, Image} from 'react-native';

import RECETES from '../LocalData/RECETES';

const HorizontalList = () =>{
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


const styles = StyleSheet.create({
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
        fontWeight:'bold',
        color: "black",
      },
      img: {
        width:200,
        height:200,
        borderRadius: 5,
        
      },
});


export default HorizontalList;
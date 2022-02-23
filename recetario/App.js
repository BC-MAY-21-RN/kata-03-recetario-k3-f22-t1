/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View,
  TextInput,
  Image,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Item = ({ title, image }) => (
    <View style={styles.item}>
      <Image
        style = {styles.img}
        source = {{uri : `${image}`}}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} />
  );

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.buscador}>
          <Searchbar/>  
        </View>
        <View
          style={{ 
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <ScrollView>
            <Text style={styles.sectionTitle}>TRENDING</Text>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  buscador: {
    padding:15,

  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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

const DATA = [
  { id: 1,
    title: 'Pizza uno',
    image: 'https://placeimg.com/200/200/nature'
  },
  { id: 2,
    title: 'Pizza Dos',
    image: 'https://placeimg.com/200/200/tech'
  },
  { id: 3,
    title: 'Pizza tres',
    image: 'https://placeimg.com/200/200/people'
  },
  {
    id: 4,
    title: 'Pizza cuatro',
    image: 'https://placeimg.com/200/200/nature'
  },
  {
    id: 5,
    title: 'Pizza cinco',
    image: 'https://placeimg.com/200/200/tech'
  },
  {
    id: 6,
    title: 'Pizza seis',
    image: 'https://placeimg.com/200/200/people'
  },
];
export default App;

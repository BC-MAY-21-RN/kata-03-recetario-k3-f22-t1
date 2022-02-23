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
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>      
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Item = ({ title, image }) => (
  <View style={styles.item}>
    <Image
      style = {styles.img}
      source = {{uri : `${image}`}}
    />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} />
  );

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View style={styles.buscador}>
          <Searchbar/>  
        </View>
        <View
          style={{ 
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </Section>
          <Section title="Step two">
          </Section>
          <Section title="Step tres">
          </Section>
          <Section title="Step cuatro">
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }, 
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
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
    width:70,
    height:70,
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

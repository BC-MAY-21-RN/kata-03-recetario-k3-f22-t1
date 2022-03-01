 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   View,
 } from 'react-native';
 import { Searchbar } from 'react-native-paper';
 import HorizontalList from '../componentes/HorizontalList';
 import styles from '../styles';
 const Home: ()=> Node = () => {
 
   return (
     <SafeAreaView style={styles.backgroundApp}>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={styles.backgroundApp}>
         <View style={styles.buscador}>
           <Searchbar
           style={styles.searchbar}
            placeholder='What do you want to eat?'
           />  
           <HorizontalList/> 
           <HorizontalList/>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 export default Home;
 
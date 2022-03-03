 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   View,
 } from 'react-native';
 import { Searchbar } from 'react-native-paper';
 import TrendingList from '../componentes/TrendingList';
 import RecentList from '../componentes/RecentList';
 import styles from '../styles';
 const Home: ()=> Node = () => {
 
   return (
     <SafeAreaView style={styles.backgroundApp}>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic">
         <View style={styles.buscador}>
           <Searchbar
           style={styles.searchbar}
            placeholder='What do you want to eat?'
           />  
           <TrendingList/> 
           <RecentList/>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 export default Home;
 
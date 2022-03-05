 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   View,
 } from 'react-native';
 import { Searchbar } from 'react-native-paper';

 import SearchBar from '../componentes/SearchBar';
 import TrendingList from '../componentes/TrendingList';
 import RecentList from '../componentes/RecentList';
 import styles from '../styles';
 const Home: ()=> Node = () => {
 
   return (
     <SafeAreaView style={styles.backgroundApp}>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic">
         <View style={styles.buscador}>

            <SearchBar/>
           <TrendingList/> 
           <RecentList/>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 export default Home;
 
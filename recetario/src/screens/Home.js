 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   useColorScheme,
   View,
 } from 'react-native';
 import { Searchbar } from 'react-native-paper';
 import {
   Colors
 } from 'react-native/Libraries/NewAppScreen';
 
 import HorizontalList from '../componentes/HorizontalList';
 import styles from '../LocalData/styles';
 const Home: ()=> Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <View style={styles.buscador}>
           <Searchbar/>  
           <HorizontalList/> 
           <HorizontalList/>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 export default Home;
 
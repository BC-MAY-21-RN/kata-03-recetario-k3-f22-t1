import * as React from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { List } from 'react-native-paper';

import styles from '../styles';

const Ingredient: ()=> Node = () =>{
    return(
        <List.Section>
        <List.Subheader style={{color:"white"}}>INGREDIENTS</List.Subheader>
        <List.Subheader style={{color:"white"}}>for 3 compas</List.Subheader>
        <List.Item  
            title="Jam" 
            left={() => <List.Icon icon="food" />} 
        />
        <List.Item
          title="Salami"
          left={() => <List.Icon color="#ffffff" icon="food" />}
        />
        <List.Item
          title="Love"
          left={() => <List.Icon color="#ffffff" icon="heart" />}
        />
      </List.Section>
    );
};

export default Ingredient;
import * as React from 'react';
import { List } from 'react-native-paper';


const Ingredients = () =>{
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

export default Ingredients;
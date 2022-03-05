import React from "react";
import { View, Pressable, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles';

const SearchBar = () =>{
    return(
        <View style={{padding:10, marginTop:10}}>
            <View style={styles.searchBar}>
                <Pressable style={styles.iconSearch}>
                    <Icon name="search" size={20} color="white"/>
                </Pressable>

                <TextInput
                    style={styles.searchInput}
                    placeholder="what do you want to eat?"
                    placeholderTextColor={"white"}
                />

                <Pressable style={styles.iconSearch}>
                    <Icon name="mic" size={20} color="white"/>
                </Pressable>
            </View>
        </View>
    );
};

export default SearchBar;
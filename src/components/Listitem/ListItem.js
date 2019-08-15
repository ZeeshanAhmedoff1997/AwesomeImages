/* eslint-disable space-infix-ops */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const ListItem = (props) => (
<TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.ListItem} >
            <Text style={styles.ListItemText}>{props.placeName}</Text>
        </View>
</TouchableOpacity>
);
const styles=StyleSheet.create({
    ListItem: {
        margin: 5,
       // padding: 10,
        justifyContent: 'center',
		alignItems: 'center',
        backgroundColor: '#eee',
        width: '100%',
    },
    ListItemText: {
       // borderWidth: 1,
       // borderColor: 'black',
        fontFamily: 'GreatVibes-Regular',
        fontSize: 30,
        
    }
});
export default ListItem;
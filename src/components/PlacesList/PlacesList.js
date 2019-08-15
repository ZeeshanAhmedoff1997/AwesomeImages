/* eslint-disable space-infix-ops */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import ListItem from '../Listitem/ListItem';
import { tsPropertySignature } from '@babel/types';
const PlacesList = props => {
    
        
        return (
            <FlatList style={styles.ListView}>
                data={props.places}
                renderItem={(info)=>(
                    <ListItem 
                    placeName={info.item.value}
                    onItemPressed= {()=>props.OnItemDeleted(info.item.key)}  />
                )}
            </FlatList>
        );
    };
    const styles = StyleSheet.create({
        ListView: {
            
            width: '100%',
            marginLeft: 40,
            marginRight: 40,
        }
    
    });
export default PlacesList;
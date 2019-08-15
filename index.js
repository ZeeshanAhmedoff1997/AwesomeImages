/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable space-infix-ops */
/* eslint-disable no-unused-labels */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-labels */

import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/newline-after-import
// eslint-disable-next-line no-unused-vars
import { View, AppRegistry, TextInput, StyleSheet, Button, Text } from 'react-native';
import ListItem from './src/components/Listitem/ListItem';
import PlacesList from './src/components/PlacesList/PlacesList';
export default class MyApp extends Component {
	state = {
		placeName: '',
		places: [],
	}

	ChangePlaceName= val => {
		this.setState({
			placeName: val,
		});
	};
	PlaceSubmitHandler= () => {
		if (this.state.placeName === '') {
			return;
		}
		this.setState(preState => {
			return {
				places: preState.places.concat({value:preState.placeName,
					 key:Math.random()}),
				placeName: ''
			};
		});
		// eslint-disable-next-line no-undef
		//alert(this.state.placeName);
	}
	ItemDeletedHandler= key => {
		this.setState(prevState=>{
			return {
				places: prevState.places.filter(place => {
					return place.key !== key;
				})
			};

		});

	}

	// eslint-disable-next-line padded-blocks
	render() {

		
		return (
			<View style={styles.Container}> 
			<View style={styles.InputContainer}>
			<TextInput  
				placeholder="Enter the place"
				style={styles.inputPlace}
				value={this.state.placeName} 
				onChangeText={this.ChangePlaceName}
			/>
			<Button 
				title="Add"
				style={styles.inputButton}
				onPress={this.PlaceSubmitHandler} 
			/>
			</View>
			<PlacesList places={this.state.places}  OnItemDeleted={this.ItemDeletedHandler}/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	Container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		textDecorationLine: 'underline',
	},
	InputContainer: {
		width: '100%',
		padding: 20,
		//flex:1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	inputPlace: {
		width: '70%',
		fontSize: 20,
		
	},
	inputButton: {
		width: '30%',
	},
	ListView: {
		
		width: '100%',
		marginLeft: 40,
		marginRight: 40,
	}

});

AppRegistry.registerComponent('AwesomePlaces2', () => MyApp);

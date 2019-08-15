/* eslint-disable space-infix-ops */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
const PlaceInput = (props) => (
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
				onPress={props.placeadded} 
			/>
			</View>
);
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

export default PlaceInput;
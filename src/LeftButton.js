/**
 * The left button component
 * @flow
 */

import React from 'react';
import {
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
	text?: string,
	textColor?: string,
	onPress: ?Function,
	iconName?: string,
	iconColor?: string
};

const LeftButton = (props: Props): ?ReactElement<*> => (
	<TouchableOpacity
		style={styles.button}
		onPress={props.onPress}
	>
		{props.iconName &&
			<Icon
				name={props.iconName}
				size={36}
				style={styles.icon}
				color={props.iconColor || 'rgb(0, 122, 255)'}
			/>
		}
		{props.text &&
			<Text style={[styles.text,
				(props.textColor && {color: props.textColor}) || {}
			]}>
				{props.text}
			</Text>
		}
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		width: 70,
		paddingLeft: 8,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	text: {
		color: 'rgb(0, 122, 255)',
		fontSize: 17,
		lineHeight: 17
	},
	icon: {
		marginRight: 6
	}
})

export default LeftButton;

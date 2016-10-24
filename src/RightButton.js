/**
 * The right button component
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

const RightButton = (props: Props): ?ReactElement<*> => (
	<TouchableOpacity
		style={styles.button}
		onPress={props.onPress}
	>
		{props.text &&
			<Text style={[styles.text,
				(props.textColor && {color: props.textColor}) || {}
			]}>
				{props.text}
			</Text>
		}
		{props.iconName &&
			<Icon
				name={props.iconName}
				size={36}
				style={styles.icon}
				color={props.iconColor || 'rgb(0, 122, 255)'}
			/>
		}
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		width: 70,
		paddingRight: 8,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	text: {
		color: 'rgb(0, 122, 255)',
		fontSize: 17,
		lineHeight: 17
	},
	icon: {
		marginLeft: 6
	}
})

export default RightButton;

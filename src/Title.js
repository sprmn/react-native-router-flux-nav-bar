/**
 * The title component
 * @flow
 */

import React from 'react';
import {
	Animated,
	StyleSheet
} from 'react-native';

type Props = {
	navigationState: Object,
	opacity?: number,
	position?: Object,
	titleColor?: string
};

const Title = (props: Props) => {

	// Find deepest list of scenes from the navigation state
	let state = props.navigationState;
	let child = state.children[state.index];
	while (child.hasOwnProperty('children')) {
		state = child;
		child = child.children[child.index];
	}

	// Render animated title
	return (
		<Animated.View style={styles.container}>
		{
			state.children.map((child, index) => {

				// Obtain title
				let title = child.title || (child.component && child.component.title);
				if (typeof(title) === 'function') {
					title = title(child);
				}

				return (
					<Animated.Text
						key={child.key}
						style={[
							styles.title,
							(props.position && {
								opacity: props.position.interpolate({
									inputRange: [index - 1, index, index + 1],
									outputRange: [0, props.opacity || 1, 0],
								}),
								left: props.position.interpolate({
									inputRange: [index - 1, index + 1],
									outputRange: [200, -200],
								}),
								right: props.position.interpolate({
									inputRange: [index - 1, index + 1],
									outputRange: [-200, 200],
								})
							}) || {},
							(child.titleColor && {color: child.titleColor}) || {}
						]}
						numberOfLines={1}
					>
						{title}
					</Animated.Text>
				);
			})
		}
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	title: {
		position: 'absolute',
		top: 13,
		textAlign: 'center',
		fontSize: 17,
		lineHeight: 17,
		fontWeight: '500',
		backgroundColor: 'transparent'
	}
})

export default Title;

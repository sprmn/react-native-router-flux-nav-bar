/**
 * NavBar implementation for ios
 * @flow
 */

import React from 'react';
import {
	View,
	StyleSheet,
	StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LeftButton from './LeftButton';
import Title from './Title';
import RightButton from './RightButton';

import type { NavBarProps } from './types.js';

// TODO: add drawer support
const NavBar = (props: NavBarProps) => {

	// Find selected scene
	let state = props.navigationState;
	let selected = state.children[state.index];
	while (selected.hasOwnProperty('children')) {
		state = selected;
		selected = selected.children[selected.index];
	}

	// Find button configurations
	const shouldRenderLeftButton = !!selected.leftButtonOnPress
	&& !!(selected.leftButtonText || selected.leftButtonIconName);
	const shouldRenderRightButton = !!selected.rightButtonOnPress
	&& !!(selected.rightButtonText || selected.rightButtonIconName);
	const shouldRenderBackButton = !shouldRenderLeftButton
		&& (props.navigationState.index !== 0);

	// Add padding if necessary
	const padding = {};
	if (shouldRenderRightButton != (shouldRenderLeftButton || shouldRenderBackButton)) {
		if (shouldRenderRightButton) {
			padding.paddingLeft = 70;
		}
		else {
			padding.paddingRight = 70;
		}
	}

	// Render animated navbar with buttons and title
	return (
		<View
			style={[
				styles.navBar,
				(props.navBarColor && {backgroundColor: props.navBarColor}) || {},
				padding
			]}
		>
			<StatusBar
				animated={props.statusBarAnimated}
				hidden={props.statusBarHidden}
				barStyle={props.statusBarStyle}
				showHideTransition={props.statusBarTransition}
			/>
		{shouldRenderLeftButton &&
				<LeftButton
					text={selected.leftButtonText}
					textColor={selected.leftButtonTextColor}
					iconName={selected.leftButtonIconName}
					iconColor={selected.leftButtonIconColor}
					onPress={selected.leftButtonOnPress
						? selected.leftButtonOnPress.bind(props.navigationState)
						: null}
				/>
			}
			{shouldRenderBackButton &&
				<LeftButton
					text={selected.backButtonText}
					textColor={selected.backButtonTextColor}
					iconName={selected.backButtonIconName || 'ios-arrow-back'}
					iconColor={selected.backButtonIconColor}
					onPress={selected.backButtonOnPress
						? selected.backButtonOnPress.bind(props.navigationState)
						: Actions.pop}
				/>
			}
			<Title
				navigationState={props.navigationState}
				position={props.position}
				opacity={selected.titleOpacity}
				titleColor={selected.color}
			/>
			{shouldRenderRightButton &&
				<RightButton
					text={selected.rightButtonText}
					textColor={selected.rightButtonTextColor}
					iconName={selected.rightButtonIconName}
					iconColor={selected.rightButtonIconColor}
					onPress={selected.rightButtonOnPress
						? selected.rightButtonOnPress.bind(props.navigationState)
						: null}
				/>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	navBar: {
		backgroundColor: '#EFEFF2',
		top: 0,
		right: 0,
		left: 0,
		height: 64,
		paddingTop: 20,
		borderBottomWidth: 0.5,
		borderBottomColor: '#828287',
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'stretch'
	}
})

export default NavBar;

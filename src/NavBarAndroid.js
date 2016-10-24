/**
 * NavBar implementation for android
 * @flow
 */

import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

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
	const shouldRenderLeftButton = selected.leftButtonOnPress
	&& (selected.leftButtonText || selected.leftButtonIconName);
	const shouldRenderRightButton = selected.rightButtonOnPress
	&& (selected.rightButtonText || selected.rightButtonIconName);
	const shouldRenderBackButton = !shouldRenderLeftButton
		&& (props.navigationState.index !== 0);

	// Set left icon
	let navIconName;
	let iconColor;
	let onIconClicked;
	// Normal left button
	if (shouldRenderLeftButton) {
		navIconName = selected.leftButtonIconName;
		iconColor = selected.leftButtonIconColor
		onIconClicked = selected.leftButtonOnPress
			&& selected.leftButtonOnPress.bind(null, props.navigationState);
	}
	// Back button
	else if (shouldRenderBackButton) {
		navIconName = selected.backButtonIconName || 'arrow-back';
		iconColor = selected.backButtonIconColor
		onIconClicked = (selected.backButtonOnPress
			&& selected.backButtonOnPress.bind(null, props.navigationState))
			|| Actions.pop;
	}

	// Set right icon
	let rightAction;
	let onActionSelected;
	if (shouldRenderRightButton) {
		// Title
		rightAction = {
			title: selected.rightText || '',
			show: 'always',
			showWithText: true,
			iconColor: selected.rightButtonIconColor,
			iconName: selected.rightButtonIconName,
		};
		onActionSelected = selected.rightButtonOnPress
			&& selected.rightButtonOnPress.bind(null, props.navigationState);
	}

	// Obtain title
	let title = selected.title || (selected.component && selected.component.title);
	if (typeof(title) === 'function') {
		title = title(selected);
	}

	// Render animated navbar with buttons and title
	return (
		<View style={styles.container}>
			<StatusBar
				animated={props.statusBarAnimated}
				hidden={props.statusBarHidden}
				backgroundColor={props.statusBarColor}
				translucent={props.statusBarTranslucent}
			/>
			<Icon.ToolbarAndroid
				style={[
					styles.navBar,
					(props.navBarColor && {backgroundColor: props.navBarColor}) || {}
				]}
				title={title}
				titleColor={selected.titleColor}
				navIconName={navIconName}
				iconColor={iconColor}
				onIconClicked={onIconClicked}
				actions={rightAction && [rightAction]}
				onActionSelected={onActionSelected}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		alignItems: 'stretch'
	},
	navBar: {
		height: 56,
		backgroundColor: '#eee',
		flex: 1,
		elevation: 2
	}
});

export default NavBar;

/**
 * Navigator for the MYT App
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	ActionSheetIOS,
	ToastAndroid,
	Alert
} from	'react-native';
import {
	Scene,
	Router,
	Actions
} from 'react-native-router-flux';
import NavBar from 'react-native-router-flux-nav-bar';
import { FirstPage, SecondPage } from './components';

class ExampleNavigator extends Component {

	render() {
		return (
			<Router navBar={NavBar}>
				<Scene key="root" component={null}>
					<Scene
						key="firstPage"
						component={FirstPage}
						title="First page"
						statusBarStyle="default"
						{...Platform.select({
							ios: {
								leftButtonIconName: 'ios-pizza',
								leftButtonIconColor: 'white',
								leftButtonOnPress: () => ActionSheetIOS.showActionSheetWithOptions({
									options: ['An idiot sandwich','Cancel'],
									cancelButtonIndex: 1,
									title: 'Gordon Ramsay',
									message: 'What are you?'
								}, () => {})
							},
							android: {
								leftButtonIconName: 'help',
								leftButtonIconColor: 'white',
								leftButtonOnPress: () => {
									ToastAndroid.show('Yell `fire` and someone will help you', ToastAndroid.LONG);
								},
								rightButtonIconName: 'arrow-forward'
							}
						})}
						rightButtonText="next"
						rightButtonOnPress={() => Actions.secondPage()}
						navBarColor="red"
						initial
					/>
					<Scene
						key="secondPage"
						component={SecondPage}
						title={(props: {thisIsGoingToBeTheTitle: string}): string => {
							return props.thisIsGoingToBeTheTitle;
						}}
						navBarColor="black"
						titleColor="purple"
						backButtonText="Back"
						backButtonTextColor="white"
						backButtonIconColor="white"
						statusBarStyle="light-content"
						thisIsGoingToBeTheTitle="Second page"
						rightButtonIconName={Platform.OS === 'ios' ? "ios-add" : "add"}
						rightButtonIconColor="green"
						rightButtonOnPress={() => {
							Alert.alert('Alert', 'You clicked the add button', [{text: 'OK', onPress: () => {}}])
						}}
					/>
				</Scene>
			</Router>
		);
	}
}

export default ExampleNavigator;

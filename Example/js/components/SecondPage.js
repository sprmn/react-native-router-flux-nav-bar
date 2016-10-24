/**
 * Second page example
 * @flow
 */

import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from	'react-native';

const SecondPage = () => (
	<View style={styles.container}>
		<Text>
			This is the second page
		</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default SecondPage;

/**
 * First page example
 * @flow
 */

import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from	'react-native';

const FirstPage = () => (
	<View style={styles.container}>
		<Text>
			This is the first page
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

export default FirstPage;

/**
 * The prop types of the NavBar
 * @flow
 */

export type NavBarProps = {
	navBarBorderWidth?: number,
	navBarBorderColor?: string,
	navBarColor?: string,
	navigationState: Object,

	statusBarStyle?: 'default' | 'light-content',
	statusBarColor?: string,
	statusBarHidden?: boolean,
	statusBarAnimated?: boolean,
	statusBarTranslucent?: boolean,
	statusBarTransition?: 'fade' | 'slide',

	title?: string,
	titleColor?: string,
	position?: Object,

	leftButtonText?: string,
	leftButtonTextColor?: string,
	leftButtonOnPress?: Function,
	leftButtonIconName?: string,
	leftButtonIconColor?: string,

	backButtonText?: string,
	backButtonTextColor?: string,
	backButtonOnPress?: Function,
	backButtonIconName?: string,
	backButtonIconColor?: string,

	rightButtonText?: string,
	rightButtonTextColor?: string,
	rightButtonOnPress?: Function,
	rightButtonIconName?: string,
	rightButtonIconColor?: string,
};

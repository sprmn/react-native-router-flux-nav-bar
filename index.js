/**
 * All navigation related components
 * @flow
 */

import { Platform } from 'react-native';
import NavBarIOS from './src/NavBarIOS';
import NavBarAndroid from './src/NavBarAndroid';

const NavBar = Platform.OS === 'ios' ? NavBarIOS : NavBarAndroid;
export default NavBar;

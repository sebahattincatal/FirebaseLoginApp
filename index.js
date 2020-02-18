/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
//import {name as appName} from './app.json';

import Main from './src/Main';

//AppRegistry.registerComponent(appName, () => App);

// Projenin Main.js dosyasına gitmesini sağladık
AppRegistry.registerComponent('kimlikdogrulama', () => Main);

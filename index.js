import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
import { name as appName } from './app.json';

const App = () => (
        <Header />
    );
AppRegistry.registerComponent(appName, () => App);

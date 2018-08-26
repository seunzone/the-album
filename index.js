import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import { name as appName } from './app.json';

const App = () => (
    <React.Fragment>
        <Header />
        <AlbumList />
    </React.Fragment>
    );
AppRegistry.registerComponent(appName, () => App);

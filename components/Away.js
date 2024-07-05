import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './About';
import Dashboard from './Dashboard';
import names from '../utils';
import Logout from './Logout';
import Police from './Police';

const Drawer = createDrawerNavigator();

const Away = () => {
    return (
        <Drawer.Navigator initialRouteName={names.APP_SCREEN}>
            <Drawer.Screen name={names.DASHBOARD} component={Dashboard} />
            <Drawer.Screen name={names.APP_SCREEN} component={Police} />
            <Drawer.Screen name={names.ABOUT} component={About} />
            <Drawer.Screen name={names.LOGOUT} component={Logout} />
        </Drawer.Navigator>
    );
}

export default Away;
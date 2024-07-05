import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './About';
import ReporterApp from './reporter';
import Dashboard from './Dashboard';

import names from '../utils';
import Logout from './Logout';

const Drawer = createDrawerNavigator();

const Home = () => {
    return (
        <Drawer.Navigator initialRouteName={names.APP_SCREEN}>
            <Drawer.Screen name={names.DASHBOARD} component={Dashboard} />
            <Drawer.Screen name={names.APP_SCREEN} component={ReporterApp} />
            <Drawer.Screen name={names.ABOUT} component={About} />
            <Drawer.Screen name={names.LOGOUT} component={Logout} />
        </Drawer.Navigator>
    );
}

export default Home;
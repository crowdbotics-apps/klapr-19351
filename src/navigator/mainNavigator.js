import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps87162Navigator from '../features/Maps87162/navigator';
import Settings87140Navigator from '../features/Settings87140/navigator';
import Settings87125Navigator from '../features/Settings87125/navigator';
import NotificationList87124Navigator from '../features/NotificationList87124/navigator';
import Maps87123Navigator from '../features/Maps87123/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps87162: { screen: Maps87162Navigator },
Settings87140: { screen: Settings87140Navigator },
Settings87125: { screen: Settings87125Navigator },
NotificationList87124: { screen: NotificationList87124Navigator },
Maps87123: { screen: Maps87123Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

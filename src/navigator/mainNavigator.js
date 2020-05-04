import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item38034Navigator from '../features/Add-Item38034/navigator';
import Maps38033Navigator from '../features/Maps38033/navigator';
import UserProfile38006Navigator from '../features/UserProfile38006/navigator';
import Tutorial38005Navigator from '../features/Tutorial38005/navigator';
import NotificationList37977Navigator from '../features/NotificationList37977/navigator';
import Settings37976Navigator from '../features/Settings37976/navigator';
import Settings37968Navigator from '../features/Settings37968/navigator';
import UserProfile37966Navigator from '../features/UserProfile37966/navigator';
import UserProfile37935Navigator from '../features/UserProfile37935/navigator';
import Tutorial37934Navigator from '../features/Tutorial37934/navigator';
import NotificationList37906Navigator from '../features/NotificationList37906/navigator';
import Settings37905Navigator from '../features/Settings37905/navigator';
import Settings37897Navigator from '../features/Settings37897/navigator';
import UserProfile37895Navigator from '../features/UserProfile37895/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Add-Item38034: { screen: Add-Item38034Navigator },
Maps38033: { screen: Maps38033Navigator },
UserProfile38006: { screen: UserProfile38006Navigator },
Tutorial38005: { screen: Tutorial38005Navigator },
NotificationList37977: { screen: NotificationList37977Navigator },
Settings37976: { screen: Settings37976Navigator },
Settings37968: { screen: Settings37968Navigator },
UserProfile37966: { screen: UserProfile37966Navigator },
UserProfile37935: { screen: UserProfile37935Navigator },
Tutorial37934: { screen: Tutorial37934Navigator },
NotificationList37906: { screen: NotificationList37906Navigator },
Settings37905: { screen: Settings37905Navigator },
Settings37897: { screen: Settings37897Navigator },
UserProfile37895: { screen: UserProfile37895Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

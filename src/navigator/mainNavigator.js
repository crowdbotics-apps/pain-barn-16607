import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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

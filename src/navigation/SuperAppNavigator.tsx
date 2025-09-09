import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faClipboardList, faWallet, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import SuperAppHomeScreen from '../screens/SuperAppHomeScreen';
import RideScreen from '../screens/RideScreen';
import FoodScreen from '../screens/FoodScreen';
import GroceryScreen from '../screens/GroceryScreen';
import ParcelScreen from '../screens/ParcelScreen';
import PromotionsScreen from '../screens/PromotionsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import WalletScreen from '../screens/WalletScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import HelpCenterScreen from '../screens/HelpCenterScreen';
import ReviewsScreen from '../screens/ReviewsScreen';

const HomeStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screens: {
        Home: {
            screen: SuperAppHomeScreen,
            options: { headerShown: false },
        },
        Ride: {
            screen: RideScreen,
            options: { title: 'Ride' },
        },
        Food: {
            screen: FoodScreen,
            options: { title: 'Food' },
        },
        Grocery: {
            screen: GroceryScreen,
            options: { title: 'Grocery' },
        },
        Parcel: {
            screen: ParcelScreen,
            options: { title: 'Parcel' },
        },
        Promotions: {
            screen: PromotionsScreen,
            options: { title: 'Promotions' },
        },
          Wallet: {
              screen: WalletScreen,
              options: { title: 'Wallet' },
          },
          Chat: {
              screen: ChatScreen,
              options: { title: 'Chat' },
          },
          Help: {
              screen: HelpCenterScreen,
              options: { title: 'Help' },
          },
          Reviews: {
              screen: ReviewsScreen,
              options: { title: 'Reviews' },
          },
      },
  });

const Tab = createBottomTabNavigator({
    initialRouteName: 'HomeTab',
    screenOptions: { headerShown: false },
    screens: {
        HomeTab: {
            screen: HomeStack,
            options: {
                tabBarLabel: 'Home',
                tabBarIcon: () => <FontAwesomeIcon icon={faHome} />,
            },
        },
        OrdersTab: {
            screen: OrdersScreen,
            options: {
                tabBarLabel: 'Orders',
                tabBarIcon: () => <FontAwesomeIcon icon={faClipboardList} />,
            },
        },
        WalletTab: {
            screen: WalletScreen,
            options: {
                tabBarLabel: 'Wallet',
                tabBarIcon: () => <FontAwesomeIcon icon={faWallet} />,
            },
        },
        InboxTab: {
            screen: NotificationsScreen,
            options: {
                tabBarLabel: 'Inbox',
                tabBarIcon: () => <FontAwesomeIcon icon={faBell} />,
            },
        },
        ProfileTab: {
            screen: ProfileScreen,
            options: {
                tabBarLabel: 'Profile',
                tabBarIcon: () => <FontAwesomeIcon icon={faUser} />,
            },
        },
    },
});

const SuperAppNavigator = createStaticNavigation(Tab);
export default SuperAppNavigator;

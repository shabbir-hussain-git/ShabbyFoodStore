import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SCREEN_NAME from '../Util/Constants';
import FDColor from '../../Colors/FDColor';

import HomeTab from './HomeScreen/HomeTab';
import MenuTab from './MenuScreen/MenuTab';
import CheckoutTab from './CheckoutScreen/CheckoutTab';

import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const Home = () => {
  const getIcon = (focused, name) => {
    const property = {
      name: name,
      color: focused ? FDColor.blue100 : FDColor.white,
      size: 26,
    };
    return <Icon {...property} />;
  };
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAME.homeTab}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: FDColor.black100},
        tabBarActiveTintColor: 'white',
      }}>
      <Tab.Screen
        options={({navigation}) => ({
          title: 'Home',
          tabBarIcon: props => {
            return getIcon(props.focused, 'home');
          },
        })}
        name={SCREEN_NAME.homeTab}
        component={HomeTab}
      />
      <Tab.Screen
        options={({navigation}) => ({
          title: 'Menu',
          tabBarIcon: props => {
            return getIcon(props.focused, 'menu-fold');
          },
        })}
        name={SCREEN_NAME.menuTab}
        component={MenuTab}
      />
      <Tab.Screen
        options={({navigation}) => ({
          title: 'Checkout',
          tabBarIcon: props => {
            return getIcon(props.focused, 'shoppingcart');
          },
        })}
        name={SCREEN_NAME.checkoutTab}
        component={CheckoutTab}
      />
    </Tab.Navigator>
  );
};

export default Home;

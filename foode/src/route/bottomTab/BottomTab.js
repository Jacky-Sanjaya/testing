import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/homeScreen/HomeScreen';
import OrderFoodScreen from '../../screen/orderFoodScreen/OrderFoodScreen';
import RestaurantScreen from '../../screen/restaurantScreen/RestaurantScreen';
import FontAwesome5 from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: '#e91e',
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}

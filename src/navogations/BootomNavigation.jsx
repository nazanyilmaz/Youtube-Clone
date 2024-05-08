import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TrendingScreen from '../screens/TrendingScreen';
import SubscriptionsScreen from '../screens/SubscriptionsScreen';
import ActivityScreen from '../screens/ActivityScreen';
import LibraryScreen from '../screens/LibraryScreen';
import MIcon from '../components/CoreComponents/MIcon';
import HomeStack from '../screens/StackScreens/HomeStack';
import TrendsStack from '../screens/StackScreens/TrendsStack';
MIcon;

const BootomNavigation = () => {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#c21807',
      }}>
      <Bottom.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MIcon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Trending"
        component={TrendingScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MIcon name="trending-up" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Subscription"
        component={SubscriptionsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MIcon name="albums-outline" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MIcon name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MIcon name="folder-outline" color={color} size={size} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BootomNavigation;

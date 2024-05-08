import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MIcon from './CoreComponents/MIcon';
MIcon;

const BadgetIcon = ({label, iconName, size, color}) => {
  return (
    <View className="relative">
      <MIcon name={iconName} size={size} color={'white'} />
      <View className="absolute bg-red-500  w-5 h-4 rounded-full items-center justify-center left-3 bottom-3">
        <Text className="text-white " style={{fontSize: 12}}>
          {label}+
        </Text>
      </View>
    </View>
  );
};

export default BadgetIcon;

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SubsFilterButton = ({
  label,
  onPress,
  index = {currentIndex: '', statcikIndex: ''},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={` ${
        index.currentIndex == index.statcikIndex
          ? 'bg-stone-600 '
          : 'bg-gray-500 '
      }  p-1  m-2 rounded-lg font-bold text-md w-16 h-7`}>
      <Text
        className={`
          ${
            index.currentIndex == index.statcikIndex
              ? 'text-white'
              : 'text:dark'
          } font-md text-md text-center 
        `}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SubsFilterButton;

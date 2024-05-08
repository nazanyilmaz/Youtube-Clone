import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const IconBox = ({name, value}) => {
  return (
    <View className="items-center justify-center m-3 ">
      <Icon name={name} color={'white'} size={18} />
      <Text className="text-white text-sm font-semibold mt-2">{value}</Text>
    </View>
  );
};

export default IconBox;

const styles = StyleSheet.create({});

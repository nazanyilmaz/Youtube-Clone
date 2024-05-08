import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const MIcon = ({name, size, color, style}) => {
  return (
    <View style={style}>
      <Icon name={name} size={size} color={color} />
    </View>
  );
};

export default MIcon;

const styles = StyleSheet.create({});

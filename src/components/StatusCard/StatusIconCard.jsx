import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StatusIconCard = () => {
  return (
    <View className="flex-row justify-between p-2">
      <View className="flex-row gap-8">
        <Icon name="thumb-up-off-alt" size={25} color={'gray'} />
        <Icon name="thumb-down-off-alt" size={25} color={'gray'} />
      </View>

      <View>
        <Icon name="insert-comment" size={25} color={'gray'} />
      </View>
    </View>
  );
};

export default StatusIconCard;

const styles = StyleSheet.create({});

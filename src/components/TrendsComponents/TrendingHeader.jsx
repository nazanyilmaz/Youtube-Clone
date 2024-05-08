import {Text, View} from 'react-native';
import React from 'react';

const TrendingHeader = ({head}) => {
  return (
    <View className=" bg-neutral-900 p-3">
      <Text className="text-white">{head}</Text>
    </View>
  );
};

export default TrendingHeader;

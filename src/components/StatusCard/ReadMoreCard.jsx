import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ReadMoreCard = ({content}) => {
  const statusContent = content.split('');

  const karakterSayisi = statusContent.length;
  return (
    <View className="mt-5">
      <Text className="text-white">
        {karakterSayisi <= 50
          ? content
          : statusContent.slice(0, 100).join('') + `\n...more`}
      </Text>
    </View>
  );
};

export default ReadMoreCard;

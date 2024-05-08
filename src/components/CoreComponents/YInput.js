import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const YInput = () => {
  return (
    <TextInput
      className="bg-stone-950 rounded-lg flex-1 p-2"
      placeholderTextColor={'rgb(120 113 108)'}
      placeholder="Type your comment..."
    />
  );
};

export default YInput;

const styles = StyleSheet.create({});

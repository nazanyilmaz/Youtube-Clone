import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import StatusCardHeader from './StatusCardHeader';
import ReadMoreCard from './ReadMoreCard';
import StatusIconCard from './StatusIconCard';
import StatusCommentCard from './StatusCommentCard';

const StatusCard = () => {
  const [content, setContent] = useState(
    'Software Engineer, Software, Engineering, React, React Native, NodeJS, Mobile, Developer, Mehmet Can Seyhan Software Engineer, Software, Web, Android, iOS, Backend, Frontend, JS, Mobile and Social Engineering, Developer, King of Sweden',
  );

  return (
    <View className="border-t border-b border-stone-600 tetx-white">
      <StatusCardHeader />
      <ReadMoreCard content={content} />
      <Image
        className="w-100 h-96 mt-3"
        source={{
          uri: 'https://yt3.ggpht.com/AsRKSuykmf8m5IKnCqteS7SBzx10aiA2JIh-32gS1nZk4SEWOXLY0xEmYBk7kaytKkIBUwYDkhZoWg=s768-c-fcrop64=1,17a70000a794ffff-nd-v1',
        }}
      />
      <StatusIconCard />
      <StatusCommentCard />
    </View>
  );
};

export default StatusCard;

const styles = StyleSheet.create({});

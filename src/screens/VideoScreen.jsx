import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import VideoHeader from '../components/VideoHeader';
import ChannelCard from '../components/ChannelCard';
import Header from '../components/Header';
import CommentCard from '../components/CommentCard';
import HomeCard from '../components/HomeCard';

import {VideoContext} from '../context/VideoStore';

const VideoScreen = props => {
  const {vvideos} = useContext(VideoContext);

  //console.log(props.route.params.video);
  const [videoDetail, setVideoDetail] = useState(props.route.params.video);
  //console.log(videoDetail.videoId);

  return (
    <View style={{backgroundColor: '#333', padding: 10, flex: 1}}>
      <Header />
      <TouchableOpacity onPress={() => console.log('hi')} style={{height: 200}}>
        <Image
          style={{flex: 1}}
          source={{
            uri: 'https://www.youtube.com/watch?v=2Pmh2I1evQc&ab_channel=G%C3%BCld%C3%BCrG%C3%BCld%C3%BCr',
          }}
        />
      </TouchableOpacity>
      <ScrollView style={{backgroundColor: '#333', flex: 1}}>
        <View>
          <VideoHeader
            header={{
              shortHeader: videoDetail?.videoTitle,
              longHeader: videoDetail?.videoHeader,
            }}
          />
          <ChannelCard channelTitle={videoDetail?.channelTitle} />
          <CommentCard />
        </View>
        <View>
          style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}
          <FlatList
            style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}
            data={vvideos}
            renderItem={({item}) => <HomeCard videoInfo={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoScreen;

import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const SubscriptionChannelsAvatar = ({channelAvatar, channelName, badge}) => {
  //Gelen channelName diziye dönüştruloyr
  const channelNametoArray = channelName.split('');

  //gelen channellName nin diziye dönüştürlmüş halnini uzunluğu tespit ediliyor
  const karakterSayisi = channelNametoArray.length;

  return (
    <View className="items-center justify-center  h-24 p-1  m-1 relative">
      <Image
        className="w-16 h-16 rounded-full mb-1"
        source={{
          uri: channelAvatar,
        }}
      />
      <Text className="text-white text-md font-bold">
        {/*Karakter Sayısının 8 ve 8 den küçük olma durumu kontrol ediliyor çünkü 8 den fazla ise 8 karakterden sonra ... olacak*/}
        {karakterSayisi <= 12
          ? //Eğer 8 ve 8den küçükse kanal ismi direk yazdırılıyor
            channelName
          : //fazla ise
            //önce ilk sekiz karakter alınıyor  //sonrasinde Join metodu ile sonuna '...' ekleniyor
            channelNametoArray.slice(0, 12).join('') + '...'}
      </Text>

      {badge && (
        <View className="bg-blue-700 rounded-full border-2 border-white w-3 h-3 absolute right-4 bottom-7" />
      )}
    </View>
  );
};

export default SubscriptionChannelsAvatar;

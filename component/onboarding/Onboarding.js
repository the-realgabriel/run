import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import slides from '../../slides'

import OnboardingItem from './OnboardingItem';

export default  Onboarding = () =>{
  return (
    <View style={styles.container}>
      <View>
      <FlatList 
      data={slides} 
      renderItem={({item}) => <OnboardingItem item={item} />} 
      horizontal
      showsHorizontalScrollIndicator={false} 
      pagingEnabled
      bounces={false}
      keyExtractor={(item)=> item.id}
         />
         </View>
      <StatusBar style="auto" />
        


    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


});

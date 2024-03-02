import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import slides from '../slides'
import OnboardingItem from '../components/OnboardingItem';

export default  Onboarding = () =>{
  return (
    <View style={styles.container}>
      <Flatlist data={slides} renderItem={({item}) => <OnboardingItem item={item} />} horizontal showsHorizontalScrollIndicator={false} />
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

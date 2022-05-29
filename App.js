import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import Navigation from './src/navigation';

Amplify.configure(config);
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
      {/* <Testing3/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
export default App;

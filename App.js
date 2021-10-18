import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView } from 'react-native';

const statusBarHeight = StatusBar.currentHeight; 

export default function App() {
  return (
      <SafeAreaView style={{flex:1, marginTop: statusBarHeight }}>
        <View style={{ backgroundColor: 'green', padding: 16 }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'blue', padding: 16 }}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

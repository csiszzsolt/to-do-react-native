import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return ( 
    <View style={styles.header}>
      <Text style={styles.title}>My todos</Text>
    </View>
  );
}
 
export default Header;

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#535C91'
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
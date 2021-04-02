import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>{props.text}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    backgroundColor: 'white',
    elevation: 5,
  },
  heading: {
    margin: 10,
    marginHorizontal: 15,
    fontSize: 24,
  },
});

export default Header;

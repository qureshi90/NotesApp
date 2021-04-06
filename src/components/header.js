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
    backgroundColor: '#A48862',
    elevation: 5,
  },
  heading: {
    margin: 10,
    marginHorizontal: 15,
    fontSize: 24,
    color: 'white',
  },
});

export default Header;

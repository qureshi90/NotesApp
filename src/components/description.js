import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import {CheckBox} from 'react-native-elements';

const Description = props => {
  const [check, setCheck] = useState(false);

  return (
    <>
      <View style={styles.container}>
        {props.status === true ? (
          <View style={styles.checkContainer}>
            <CheckBox
              checked={check}
              title={<Text style={styles.title}>{props.data}</Text>}
              fontStyle={styles.title}
              containerStyle={[styles.checkStyle, styles.description]}
              onPress={() => setCheck(!check)}
            />
            {/* <Text style={styles.description}>{props.data}</Text> */}
          </View>
        ) : props.bullet === true ? (
          <View style={styles.subContainer}>
            <Text style={styles.bullet}>{'\u2022'}</Text>
            <Text style={styles.description}>{props.data}</Text>
          </View>
        ) : (
          <Text style={styles.description}>{props.data}</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkContainer: {
    flexDirection: 'row',
  },
  checkStyle: {
    margin: 0,
    borderWidth: 0,
  },
  description: {
    flex: 1,
    padding: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    textAlign: 'justify',
    backgroundColor: 'transparent',
  },
  title: {
    flex: 1,
    textAlign: 'justify',
    fontSize: 16,
    marginLeft: 5,
  },
  subContainer: {
    flexDirection: 'row',
  },
  bullet: {
    fontSize: 25,
    marginLeft: 15,
  },
});

export default Description;

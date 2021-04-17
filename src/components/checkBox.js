import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';

const Box = () => {
  const [check, setCheck] = useState(false);
  return (
    <>
      <CheckBox
        containerStyle={styles.check}
        checked={check}
        onPress={() => setCheck(!check)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  check: {
    paddingHorizontal: 0,
  },
});

export default Box;

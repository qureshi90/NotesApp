import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style.js';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Description from '../../components/description.js';

const Note = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState([]);
  const [notes, setNotes] = useState([]);
  const [check, setCheck] = useState(false);
  const [bullet, setBullet] = useState(false);

  let index = route.params.index;

  useEffect(() => {
    (async function call() {
      let data = await AsyncStorage.getItem('notes');
      setNotes(JSON.parse(data));
      setTitle(notes[index].title);
      setDescription(notes[index].description);
      setCheck(notes[index].checkStatus);
      setBullet(notes[index].bullet);
    })();
  }, [index, notes, title]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('notes')}
            style={styles.backIcon}>
            <Icon
              type={'ionicon'}
              name="chevron-back-outline"
              size={36}
              color="#fff"
            />
          </TouchableOpacity>
          <Text style={styles.heading}>{title}</Text>
        </View>
        <ScrollView>
          {description.map((data, i) => (
            <Description key={i} status={check} bullet={bullet} data={data} />
          ))}
        </ScrollView>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('new-note', {index: index, title: 'Edit Note'})
          }
          style={styles.fabButtonStyle}>
          <Icon type={'feather'} name="edit-3" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Note;

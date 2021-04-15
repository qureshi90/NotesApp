import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './style.js';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const NewNote = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);
  const [check, setCheck] = useState(false);
  const [bullet, setBullet] = useState(false);

  let index = route.params.index;

  useEffect(() => {
    (async function call() {
      if (title === '' && description === '') {
        let data = await AsyncStorage.getItem('notes');
        setNotes(JSON.parse(data));
        setTitle(notes[index].title);
        setDescription(notes[index].description.join('\n'));
        setCheck(notes[index].checkStatus);
        setBullet(notes[index].bullet);
      }
    })();
  }, [description, index, notes, title]);

  const Save = async () => {
    if (title !== '' || description !== '') {
      if (!isNaN(index)) {
        notes[index] = {
          title: title,
          checkStatus: check,
          bullet: bullet,
          description: description.split('\n'),
        };
        try {
          await AsyncStorage.setItem('notes', JSON.stringify(notes));
        } catch (e) {
          // saving error
        }
        navigation.navigate('note', {index: index});
      } else {
        notes.unshift({
          title: title,
          checkStatus: check,
          bullet: bullet,
          description: description.split('\n'),
        });
        try {
          await AsyncStorage.setItem('notes', JSON.stringify(notes));
        } catch (e) {
          // saving error
        }
        navigation.navigate('note', {index: 0});
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <Icon
            type={'ionicon'}
            name="chevron-back-outline"
            size={36}
            color="#fff"
          />
        </TouchableOpacity>
        <Text style={styles.heading}>{route.params.title}</Text>
        <Text style={styles.saveButton} onPress={Save}>
          Save
        </Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <TextInput
          style={styles.title}
          placeholder={'Enter title'}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.description}
          placeholder={'Add description'}
          multiline={true}
          value={description}
          onChangeText={text => setDescription(text)}
        />
      </ScrollView>
      <View style={styles.fabButtonStyle}>
        <Menu>
          <MenuTrigger>
            <Icon
              type={'feather'}
              name="more-vertical"
              size={26}
              color="#fff"
            />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption
              onSelect={() => {
                setCheck(!check);
                setBullet(false);
              }}>
              {check ? <Text>Remove Check</Text> : <Text>Add Check</Text>}
            </MenuOption>
            <MenuOption
              onSelect={() => {
                setBullet(!bullet);
                setCheck(false);
              }}>
              {bullet ? <Text>Remove Bullets</Text> : <Text>Add Bullets</Text>}
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
};

export default NewNote;

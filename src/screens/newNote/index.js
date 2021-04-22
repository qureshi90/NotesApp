import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import styles from './style.js';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Box from '../../components/checkBox.js';

const NewNote = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [descArray, setDescArray] = useState(['']);
  const [notes, setNotes] = useState([]);
  const [check, setCheck] = useState(false);
  const [bullet, setBullet] = useState(false);
  const [uri, setUri] = useState('');
  const [index] = useState(route.params.index);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    (async function call() {
      if (description === '') {
        let data = await AsyncStorage.getItem('notes');
        setNotes(JSON.parse(data));
        setTitle(notes[index].title);
        setDescription(notes[index].description.join('\n'));
        setDescArray(notes[index].description);
        setCheck(notes[index].checkStatus);
        setBullet(notes[index].bullet);
        setUri(notes[index].imageUri);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notes]);

  const Save = async () => {
    if (title !== '' || description !== '' || descArray !== ['']) {
      if (!isNaN(index)) {
        notes[index] = {
          title: title,
          checkStatus: check,
          bullet: bullet,
          description: check || bullet ? descArray : description.split('\n'),
          imageUri: uri,
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
          description: check || bullet ? descArray : description.split('\n'),
          imageUri: uri,
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

  const handleKeyPress = (e, i) => {
    if (e.key === 'Enter') {
      let str = descArray[i];
      descArray[i] = str.slice(0, -1);
      descArray.splice(i + 1, 0, '');
      setDescArray(descArray);
      forceUpdate();
    }
    if (e.key === 'Backspace') {
      if (descArray.length > 1) {
        if (descArray[i] === '') {
          descArray.splice(i, 1);
          forceUpdate();
        }
      }
    }
  };

  const handleText = (text, i) => {
    descArray[i] = text;
    setDescArray(descArray);
    forceUpdate();
  };

  const Pick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      console.log(image);
      setUri(image.path);
    });
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
        <TouchableOpacity style={styles.saveButton} onPress={Save}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <TextInput
          style={styles.title}
          placeholder={'Enter title'}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <View>
          {check === true ? (
            descArray.map((data, i) => (
              <View key={i} style={styles.item}>
                <Box />
                <TextInput
                  value={data}
                  autoFocus={true}
                  multiline={true}
                  style={styles.description}
                  placeholder={'Add description'}
                  onChangeText={text => handleText(text, i)}
                  onKeyPress={({nativeEvent}) => handleKeyPress(nativeEvent, i)}
                />
              </View>
            ))
          ) : bullet === true ? (
            descArray.map((data, i) => (
              <View key={i} style={styles.item}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <TextInput
                  value={data}
                  autoFocus={true}
                  multiline={true}
                  style={styles.description}
                  placeholder={'Add description'}
                  onChangeText={text => handleText(text, i)}
                  onKeyPress={({nativeEvent}) => handleKeyPress(nativeEvent, i)}
                />
              </View>
            ))
          ) : (
            <TextInput
              style={styles.description}
              placeholder={'Add description'}
              multiline={true}
              value={description}
              onChangeText={text => setDescription(text)}
            />
          )}
        </View>
        {uri !== '' && <Image source={{uri: uri}} style={styles.image} />}
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
            <MenuOption
              onSelect={() => {
                uri === '' ? Pick() : setUri('');
              }}>
              {uri ? <Text>Remove Image</Text> : <Text>Add Image</Text>}
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
};

export default NewNote;

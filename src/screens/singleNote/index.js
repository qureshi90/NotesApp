import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import styles from './style.js';
import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Description from '../../components/description.js';

const Note = ({navigation, route}) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState([]);
  const [notes, setNotes] = useState([]);
  const [check, setCheck] = useState(false);
  const [descString, setDescString] = useState('');

  let index = route.params.index;

  useEffect(() => {
    (async function call() {
      let data = await AsyncStorage.getItem('notes');
      setNotes(JSON.parse(data));

      if (!modal) {
        setTitle(notes[index].title);
        setDescription(notes[index].description);
        setCheck(notes[index].checkStatus);
        setDescString(notes[index].description.join('\n'));
      }
    })();
  }, [index, modal, notes, title]);

  const Save = async () => {
    setModal(false);

    if (title !== '' || description !== '') {
      notes[index] = {
        title: title,
        checkStatus: check,
        description: descString.split('\n'),
      };
      try {
        await AsyncStorage.setItem('notes', JSON.stringify(notes));
      } catch (e) {
        // saving error
      }
    }
  };

  const Cancel = () => {
    setTitle(route.params.title);
    setDescription(route.params.description);
    setModal(false);
  };

  // const Delete = async index => {
  //   notes.splice(index, 1);
  //   try {
  //     await AsyncStorage.setItem('notes', JSON.stringify(notes));
  //   } catch (e) {
  //     // saving error
  //   }
  // };

  return (
    <>
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
          <Text style={styles.heading}>{title}</Text>
        </View>
        <ScrollView>
          {description.map(data => (
            <Description status={check} data={data} />
          ))}
        </ScrollView>

        <TouchableOpacity
          onPress={() => setModal(true)}
          style={styles.fabButtonStyle}>
          <Icon type={'feather'} name="edit-3" size={26} color="#fff" />
        </TouchableOpacity>

        <Modal isVisible={modal} style={styles.modal}>
          <View style={styles.modalInput}>
            <TextInput
              style={styles.title}
              placeholder={'title'}
              value={title}
              onChangeText={text => setTitle(text)}
            />
            <ScrollView>
              <TextInput
                style={styles.modalDescription}
                placeholder={'description'}
                multiline={true}
                value={descString}
                onChangeText={text => setDescString(text)}
              />
            </ScrollView>
          </View>
          <View style={styles.bottomTab}>
            <View style={styles.checkContainer}>
              <Switch value={check} onValueChange={() => setCheck(!check)} />
              <Text style={styles.checkText}>Check</Text>
            </View>
            <View style={styles.buttons}>
              <Text style={styles.cancelButton} onPress={Cancel}>
                Cancel
              </Text>
              <Text style={styles.saveButton} onPress={Save}>
                Save
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default Note;

import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style.js';
import Header from '../../components/header.js';
import Card from '../../components/card.js';
import {dummyData} from '../../constants/dummyData.js';
import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';

const Notes = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Header text={'Notes'} />
        <ScrollView>
          {dummyData.map(data => (
            <Card
              key={data.id}
              title={data.title}
              description={data.description}
            />
          ))}
        </ScrollView>

        <TouchableOpacity
          onPress={() => setModal(true)}
          style={styles.fabButtonStyle}>
          <Icon type={'ionicon'} name="ios-add" size={36} color="#fff" />
        </TouchableOpacity>

        <Modal isVisible={modal} style={styles.modal}>
          <View>
            <TextInput style={styles.title} placeholder={'title'} />
            <TextInput
              style={styles.description}
              placeholder={'description'}
              multiline={true}
            />
          </View>
          <View style={styles.buttons}>
            <Text style={styles.cancelButton} onPress={() => setModal(false)}>
              Cancel
            </Text>
            <Text style={styles.saveButton} onPress={() => setModal(false)}>
              Save
            </Text>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default Notes;

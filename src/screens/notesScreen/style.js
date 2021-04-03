import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF9DB',
  },
  fabButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#0081D5',
    elevation: 5,

    width: 50,
    height: 50,
    borderRadius: 50 / 2,

    position: 'absolute',
    right: 5,
    bottom: 5,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 20,
    marginBottom: 20,
  },
  modal: {
    marginHorizontal: '10%',
    marginVertical: '20%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  title: {
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
  },
  description: {
    backgroundColor: 'transparent',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelButton: {
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    color: '#0081D5',
  },
  saveButton: {
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#0081D5',
    color: 'white',
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F6C5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#A48862',
    elevation: 5,
  },
  backIcon: {
    marginLeft: 5,
  },
  heading: {
    margin: 10,
    fontSize: 24,
    color: 'white',
  },
  description: {
    padding: 10,
    paddingHorizontal: 15,
    fontSize: 16,
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
});

export default styles;

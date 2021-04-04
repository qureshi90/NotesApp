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
});

export default styles;

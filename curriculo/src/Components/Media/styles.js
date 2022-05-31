import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 60,
  },

  touch:{
    width: 110,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    margin: 10
  },

  text:{
    fontSize: 16,
    letterSpacing: 2
  }
})
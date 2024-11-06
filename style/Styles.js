// Styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
     justifyContent:'flex-start',
    alignItems: 'center',
    backgroundColor: 'black', // Dark background
    paddingTop:80,
  },

  display: {
    fontSize: 50,
    marginBottom: 20,
    textAlign: 'right',
    width: '95%',
    padding: 40,
    backgroundColor: '#282c34',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    color: 'beige',
    fontWeight: 'bold',
    
  },

  buttonContainer: {
    width: '95%',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    
  },

  button: {
    flex: 1,
    margin: 7,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige',
    borderRadius: 60,
   
  },

  buttonText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },

  operatorButton: {
    backgroundColor: 'darkorange', // Operator button color
    borderRadius: 60,  },
  
});

export default styles;

import React from 'react';
import { TouchableOpacity , View, StyleSheet, Text, SafeAreaView, } from 'react-native';
import { appleAuth } from '@invertase/react-native-apple-authentication';

const App = () => {
  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.text}>MONGROV</Text>
        <TouchableOpacity style={styles.whiteButton} onPress={() => onAppleButtonPress()}>
          <Text style={styles.whiteButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.darkButton} onPress={() => onAppleButtonPress()}>
          <Text style={styles.darkButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.whiteButton} onPress={() => onAppleButtonPress()}>
          <Text style={styles.whiteButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.whiteButton} onPress={() =>onAppleButtonPress()}>
          <Text style={styles.whiteButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.darkButton} onPress={() => onAppleButtonPress()}>
          <Text style={styles.darkButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
async function onAppleButtonPress() {
  
  console.log("Button Pressed");

    try {
      if (appleAuth.isSupported) {
        // Proceed with Apple Authentication
        await appleAuth.performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
      } else {
        console.warn('Apple Sign-In is not supported on this device.');
      }
    } catch (error) {
      console.log("onAppleButtonPress Error: ", error);
    }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#c88bcc',
    alignItems: 'center',
    paddingTop: 50, 
    justifyContent: "center"
    
  },
  text: {
    fontSize: 24,
    color: 'white', 
    marginBottom: 15,
  },
  whiteButton:{
    backgroundColor:'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10
  },
  darkButton:{
    backgroundColor:'black',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10
  },
  whiteButtonText: {
    color: "black"
  },
  darkButtonText: {
    color: "white"
  }
});

export default App;


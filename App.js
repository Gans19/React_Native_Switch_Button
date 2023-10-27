import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SwitchButton from "./SwitchButton";

export default function App() {
  const userData = [
    {
      name: "John Doe",
      age: 30,
      address: "123 Main St",
      pincode: "12345",
      number: "555-555-5555",
    },
    {
      name: "Jane Smith",
      age: 25,
      address: "456 Elm St",
      pincode: "54321",
      number: "555-555-5556",
    },
  ];

  return (
    // <View style={styles.container}>
    
    <SwitchButton userData={userData} />
   
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

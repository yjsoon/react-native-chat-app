import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import firebase from "../database/firebaseDB";

const auth = firebase.auth();

export default function ChatScreen({ navigation }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Chat");
      } else {
        navigation.navigate("Login");
      }
    });

    return unsubscribe;
  }, []);

  function logout() {
    auth.signOut();
  }

  return (
    <View>
      <Button onPress={logout} title="Logout" />
      <Text>Hello this is chat</Text>
    </View>
  );
}

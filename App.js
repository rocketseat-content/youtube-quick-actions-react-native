import React, { Component } from "react";
import {
  Platform,
  DeviceEventEmitter,
  StyleSheet,
  Text,
  View
} from "react-native";
import QuickActions from "react-native-quick-actions";

QuickActions.setShortcutItems([
  {
    type: "contacts", // Required
    title: "Listar contatos", // Optional, if empty, `type` will be used instead
    subtitle: "Ver amigos",
    icon: Platform.OS === "ios" ? "Rocket" : "rocket_icon", // Pass any of UIApplicationShortcutIconType<name>
    userInfo: {
      url: "app://contacts" // provide custom data, like in-app url you want to open
    }
  }
]);

DeviceEventEmitter.addListener("quickActionShortcut", data => {
  console.log(data);
});

QuickActions.popInitialAction().then(data => {
  console.log(data);
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

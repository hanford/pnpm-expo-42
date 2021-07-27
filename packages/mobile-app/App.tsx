import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

const fonts = {
  babysweet: require("./assets/fonts/babysweet.ttf"),
};

export default class App extends Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync(fonts);

    this.setState({ loaded: true });
  };

  render() {
    const { loaded } = this.state;

    if (!loaded) {
      return (
        <View style={[styles.container, { flexDirection: "row" }]}>
          <ActivityIndicator />
          <Text style={{ marginLeft: 8, color: "black" }}>
            Loading fonts...
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: "babysweet", color: "black" }}>
          SF font, yo!
        </Text>
      </View>
    );
  }
}

// export default function App() {
//   const [loaded] = useFonts(fonts);

//   console.log({ loaded });

//   if (!loaded) {
//     return (
// <View style={[styles.container, { flexDirection: "row" }]}>
//   <ActivityIndic5tor />
//   <Text style={{ marginLeft: 8, color: "black" }}>Loading fonts...</Text>
// </View>
//     );
//   }

//   return (
// <View style={styles.container}>
//   <Text style={{ fontFamily: "SFProDisplay-Regular", color: "black" }}>
//     SF font, yo!
//   </Text>

//   <StatusBar style="auto" />
// </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

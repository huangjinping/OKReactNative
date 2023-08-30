/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from "react";
import React from "react";
import { StyleSheet, View ,Text} from "react-native";
import Contract from "./src/contract";


const App: () => Node = () => {
  return (
      <View>
        <Text>ddd1</Text>
        <Contract></Contract>
        <Text>ddd2</Text>
      </View>
  );
};


export default App;

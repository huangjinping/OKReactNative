import { Component } from "react";
import {
  Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppModule from "./AppModule";

export default class Contract extends Component {

  showModal = async () => {
    // const myDouble = 3.14;
    // const myString = myDouble.toString();
    // await AsyncStorage.setItem("myData", myDouble);
    // const myData = await AsyncStorage.getItem("myData");
    // if (typeof myData === "string") {
    //   // do something with the string data
    // } else {
    //   // handle the case where myData is not a string
    // }

    AppModule.onFinishApp()
    console.log(AppModule);
    // console.log("ddddddddddddddddddd");
    // var  asd='2.1299999';
    // var  aise="ddd";
    // aise=parseFloat(asd)
    //
    // console.log(typeof  asd);
    // console.log(typeof aise)
    // // aise=asd;
    // console.log(aise);
    console.log("======")

  };

  render() {
    return (<SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <TextInput placeholder="ddd"></TextInput>
          </View>

          <View>
            <TouchableOpacity onPress={this.showModal}>
              <Text>关闭当前页面</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>);
  };
}


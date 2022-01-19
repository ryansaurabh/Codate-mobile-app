import React from "react";
import { StyleSheet, Text, View, Dimensions, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import MsgBox from "./Components/msgBox";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const userData = [
  { Name: "Ankit", uri: require("./assets/pic3.png"), lastMessage: "jhdcjhwf" },
  { Name: "Rounak", uri: require("./assets/leo.jpg"), lastMessage: "jhdcjhwf" },
  {
    Name: "Purush",
    uri: require("./assets/pic2.jpg"),
    lastMessage: "jhdcjhwf",
  },
  { Name: "Mihir", uri: require("./assets/sk.jpg"), lastMessage: "jhdcjhwf" },
  { Name: "Nitin", uri: require("./assets/rr.png"), lastMessage: "jhdcjhwf" },
];

export default function Chat() {
  const [pageState, setpageState] = useState(1);
  return (
    <SafeAreaView style={{flex:1,  backgroundColor: "#181228"}}>
      <View style={styles.header}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => setpageState("MATCHES")}>
            <Text style={styles.txt}>Matches</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => setpageState("MESSAGES")}>
            <Text style={styles.txt}>Messages</Text>
          </TouchableOpacity>
        </View>
      </View>
    <ScrollView>
      {pageState === "MESSAGES" &&
        userData.map((i, index) => (
          <Pressable onPress={() => {

            //add code to redirect to specific chat page
          }}>
            <MsgBox
              key={index}
              title={i.Name}
              subtitle={i.lastMessage}
              image={i.uri}
            />
          </Pressable>
        ))}
      {pageState === "MATCHES" && (
        <View>
          <Text>2</Text>
        </View>
      )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontWeight: "600",
    fontSize: 17,
    color: "#FFFF33",
  },
  box: {
    backgroundColor: "#181228",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: "#808080",
  },
  header: {
    height: windowHeight * 0.1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "#181228",
  },
});

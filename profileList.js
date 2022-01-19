import { Text, StyleSheet, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import ProfileComp from "./Components/ProfileComp";

const componentData = [
  {
    text: "ic",
    content: "My Profile",
  },
  {
    text: "ic",
    content: "My Account",
  },
  {
    text: "ic",
    content: "Notifications",
  },
  {
    text: "ic",
    content: 'Password',
  },
  {
    text: "ic",
    content: "Devices",
  },
  {
    text: "ic",
    content: "Settings",
  },
];

export default function ProfileList() {
  return (
    <SafeAreaView>
      <View style={styles.topPortion}>
        <Pressable onPress={() => {}}>
          <View style={styles.dp}>
            <Text style={styles.add}>+</Text>
          </View>
        </Pressable>
      </View>

      <ScrollView style={styles.icon}>
        {componentData.map((e) => (
          <ProfileComp text={e.text} content={e.content} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  icon: {
    height: "100%",
    backgroundColor: "#181228",
  },
  dp: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: "#A9A9A9",
    alignContent: "center",
    justifyContent: "center",
  },
  topPortion: {
    height: 300,
    backgroundColor: "#000",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  add: {
    fontSize: 26,
    fontWeight: "500",
    textAlign: "center",
  },
});

import { View, StyleSheet, Text, Pressable} from "react-native";
import React from "react";

export default function ProfileComp({ text, content }) {
  
  return (
    <Pressable onPress={()=>{}} style={styles.container}>
      <View style={styles.jcac}>
        <View>
          <Text>{text}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.text}>{content}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.text2}>	&gt;</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#181228",
    borderBottomWidth: .2,
    borderBottomColor: "#808080",
    justifyContent: "space-between",
    paddingHorizontal:10
    
  },

  jcac: {
    flexDirection:"row",
    maxWidth: 150,
    justifyContent: "space-evenly",
    color: "red",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  text: {
    color: "#A9A9A9",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  text2:{
    color: "#808080",
    alignContent:'center',
    textAlign:'center',
    justifyContent: "center",
    fontWeight: "400",
    fontSize: 20,   
  },
  right:{

    alignContent:'center',
    textAlign:'center',
    justifyContent: "center",
  }
});
